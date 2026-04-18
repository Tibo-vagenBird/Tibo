"""Stage 3: for each team homepage, locate its recruitment/apply subpage."""

import time

import pandas as pd
import requests
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

from config import (
    EXPAND_KEYWORDS,
    HTTP_HEADERS,
    PAGE_LOAD_WAIT,
    RECRUITMENT_KEYWORDS,
    TEAMS_CSV,
)
from utils import absolute_link, make_driver


def _first_recruitment_href(links, base_url: str) -> str:
    for text, href in links:
        if not href:
            continue
        if any(kw in text.lower() for kw in RECRUITMENT_KEYWORDS):
            return absolute_link(base_url, href)
    return ""


def _expand_more_buttons(driver):
    candidates = driver.find_elements(By.CSS_SELECTOR, "button, p, span")
    for el in candidates:
        text = el.text.strip()
        if not text or not any(kw in text.lower() for kw in EXPAND_KEYWORDS):
            continue
        try:
            clickable = WebDriverWait(driver, 5).until(
                EC.element_to_be_clickable(
                    (By.XPATH, f"//*[contains(text(), '{text}')]")
                )
            )
            clickable.click()
            time.sleep(PAGE_LOAD_WAIT)
        except Exception as exc:
            print(f"[stage3:selenium]   couldn't click '{text}': {exc}")


def _selenium_find_link(driver, url: str) -> str:
    driver.get(url)
    time.sleep(PAGE_LOAD_WAIT)
    _expand_more_buttons(driver)
    anchors = driver.find_elements(By.TAG_NAME, "a")
    pairs = [(a.text.strip(), a.get_attribute("href")) for a in anchors]
    return _first_recruitment_href(pairs, url)


def selenium():
    df = pd.read_csv(TEAMS_CSV)
    recruitment = []

    driver = make_driver(headless=True)
    try:
        for url in df["Links"]:
            try:
                link = _selenium_find_link(driver, url)
                print(f"[stage3:selenium] {url} -> {link or '(none)'}")
            except Exception as exc:
                print(f"[stage3:selenium] error on {url}: {exc}")
                link = ""
            recruitment.append(link)
    finally:
        driver.quit()

    df["Recruitment"] = recruitment
    df.to_csv(TEAMS_CSV, index=False)
    print(f"[stage3:selenium] updated {TEAMS_CSV}")


def _static_find_link(url: str) -> str:
    resp = requests.get(url, headers=HTTP_HEADERS, timeout=10, verify=False)
    soup = BeautifulSoup(resp.text, "html.parser")
    pairs = [(a.get_text(strip=True), a.get("href")) for a in soup.find_all("a")]
    return _first_recruitment_href(pairs, url)


def static():
    df = pd.read_csv(TEAMS_CSV)

    for idx, url in enumerate(df["Links"]):
        try:
            link = _static_find_link(url)
            print(f"[stage3:static] {url} -> {link or '(none)'}")
        except Exception as exc:
            print(f"[stage3:static] error on {url}: {exc}")
            link = ""
        df.at[idx, "Recruitment"] = link

    df.to_csv(TEAMS_CSV, index=False)
    print(f"[stage3:static] updated {TEAMS_CSV}")


if __name__ == "__main__":
    selenium()
