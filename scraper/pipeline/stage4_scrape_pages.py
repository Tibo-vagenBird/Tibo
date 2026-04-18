"""Stage 4: scrape each recruitment page into a text dump."""

import asyncio
import random
from typing import Optional

import httpx
import pandas as pd
from bs4 import BeautifulSoup
from selenium.common.exceptions import (
    ElementClickInterceptedException,
    NoSuchElementException,
    TimeoutException,
)
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

from config import CLICK_WAIT, HTTP_HEADERS, RECRUITMENT_PAGES_TXT, TEAMS_CSV
from utils import make_driver


JS_REQUIRED_MARKER = "You need to enable JavaScript to run this app."


def _ensure_output_dir():
    RECRUITMENT_PAGES_TXT.parent.mkdir(parents=True, exist_ok=True)


COLLAPSED_XPATH = (
    "//button[not(ancestor::header) and not(ancestor::footer)]"
    " | //*[@aria-expanded='false' and not(ancestor::header) and not(ancestor::footer)]"
    " | //*[contains(@class,'accordion-item-trigger')"
    " and not(ancestor::header) and not(ancestor::footer)]"
)

ORBIT_SECTION_CSS = (
    r".py-10.max-w-4xl.mx-auto.text-left.text-gray-700.px-4.sm\:px-6"
)


def _handle_orbit(driver) -> tuple[Optional[str], list[str]]:
    try:
        section = driver.find_element(By.CSS_SELECTOR, ORBIT_SECTION_CSS)
    except NoSuchElementException:
        return None, []

    try:
        header = section.find_element(By.TAG_NAME, "h3").text.strip()
    except NoSuchElementException:
        header = None

    paragraphs = [
        el.text.strip()
        for el in section.find_elements(By.CSS_SELECTOR, "p, a, li, span")
        if el.text.strip()
    ]
    return header, paragraphs


def _handle_overlay(driver) -> tuple[Optional[str], Optional[str]]:
    try:
        overlay = WebDriverWait(driver, 1).until(
            EC.visibility_of_element_located((By.ID, "outer-overlay"))
        )
    except TimeoutException:
        return None, None

    header, body = None, None
    for el in overlay.find_elements(By.CSS_SELECTOR, "p, a, ul, h1, h2, h3"):
        if el.tag_name.lower() == "h1":
            header = el.text.strip()
        else:
            body = el.text.strip()

    driver.execute_script("arguments[0].click();", overlay)
    import time as _t
    _t.sleep(CLICK_WAIT)
    return header, body


def _click_expanders(driver, team_name: str):
    import time as _t

    button_hrefs: list[str] = []
    overlay_texts: dict[str, list[str]] = {}
    orbit_texts: dict[str, list[str]] = {}

    try:
        expanders = driver.find_elements(By.XPATH, COLLAPSED_XPATH)
    except NoSuchElementException:
        return button_hrefs, overlay_texts, orbit_texts

    for btn in expanders:
        if not (btn.is_displayed() and btn.is_enabled()):
            continue

        href = btn.get_attribute("href")
        if href:
            button_hrefs.append(f"{btn.text.strip()}{href}")
            continue

        try:
            btn.click()
            _t.sleep(CLICK_WAIT)
        except (ElementClickInterceptedException, TimeoutException):
            continue

        if team_name == "Orbit":
            header, paragraphs = _handle_orbit(driver)
            if header and paragraphs:
                orbit_texts.setdefault(header, []).extend(paragraphs)
                continue

        header, body = _handle_overlay(driver)
        if header and body:
            overlay_texts.setdefault(header, []).append(body)

    return button_hrefs, overlay_texts, orbit_texts


def _extract_visible_text(driver) -> tuple[str, list[str]]:
    body = driver.find_element(By.TAG_NAME, "body")
    full = body.text

    href_list: list[str] = []
    for a in body.find_elements(By.TAG_NAME, "a"):
        href = a.get_attribute("href")
        try:
            label = a.text.strip()
        except NoSuchElementException:
            label = ""
        href_list.append(f"{label}: {href}")

    header_text = " ".join(
        h.text for h in body.find_elements(By.TAG_NAME, "header") if h.text
    )
    footer_text = " ".join(
        f.text for f in body.find_elements(By.TAG_NAME, "footer") if f.text
    )

    visible = full
    if header_text:
        visible = visible.replace(header_text, "")
    if footer_text:
        visible = visible.replace(footer_text, "")

    return visible.strip(), href_list


def selenium():
    _ensure_output_dir()
    df = pd.read_csv(TEAMS_CSV)

    driver = make_driver(headless=True)
    try:
        with open(RECRUITMENT_PAGES_TXT, "w", encoding="utf-8") as f:
            for idx, url in enumerate(df["Recruitment"]):
                name = df["Team Name"][idx]
                if not isinstance(url, str) or not url.strip():
                    continue

                print(f"[stage4:selenium] {name}: {url}")
                try:
                    driver.get(url)
                    WebDriverWait(driver, 15).until(
                        EC.presence_of_all_elements_located((By.TAG_NAME, "body"))
                    )
                except (TimeoutException, Exception) as exc:
                    print(f"[stage4:selenium]   load failed: {exc}")
                    continue

                button_hrefs, overlay_texts, orbit_texts = _click_expanders(
                    driver, name
                )
                visible, hrefs = _extract_visible_text(driver)

                f.write(f"=== {name} ===\n")
                f.write(visible + "\n")
                for href in button_hrefs:
                    f.write(href + "\n")
                f.write(f"{overlay_texts}\n")
                if orbit_texts:
                    f.write(f"{orbit_texts}\n")
                for href in hrefs:
                    f.write(href + "\n")
                f.write("------------\n\n")
    finally:
        driver.quit()

    print(f"[stage4:selenium] wrote {RECRUITMENT_PAGES_TXT}")


async def _fetch(url: str, retries: int = 3, cooldown=(1, 3)) -> Optional[str]:
    for attempt in range(retries):
        try:
            async with httpx.AsyncClient(timeout=15, headers=HTTP_HEADERS) as client:
                r = await client.get(url)
                r.raise_for_status()
                return r.text
        except httpx.HTTPError:
            if attempt == retries - 1:
                return None
            await asyncio.sleep(random.uniform(*cooldown))
    return None


async def _scrape_all():
    df = pd.read_csv(TEAMS_CSV)
    with open(RECRUITMENT_PAGES_TXT, "w", encoding="utf-8") as f:
        for idx, url in enumerate(df["Recruitment"]):
            name = df["Team Name"][idx]
            if not isinstance(url, str) or not url.strip():
                continue

            html = await _fetch(url)
            if not html:
                print(f"[stage4:static] {name}: fetch failed")
                f.write(f"=== {name} ===\n(fetch failed)\n-----------------------------\n")
                continue

            text = BeautifulSoup(html, "html.parser").get_text(
                separator="\n", strip=True
            )

            if JS_REQUIRED_MARKER in text:
                print(f"[stage4:static] {name}: JS-only page, skipping body")
                f.write(f"=== {name} ===\n(JS-required, re-run with selenium)\n")
            else:
                print(f"[stage4:static] {name}: ok")
                f.write(f"=== {name} ===\n{text}\n")
            f.write("-----------------------------\n\n")


def static():
    _ensure_output_dir()
    asyncio.run(_scrape_all())
    print(f"[stage4:static] wrote {RECRUITMENT_PAGES_TXT}")


if __name__ == "__main__":
    selenium()
