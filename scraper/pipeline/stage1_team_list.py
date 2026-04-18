"""Stage 1: scrape the UBC design-teams directory into a raw text dump."""

import time

from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By

from config import PAGE_LOAD_WAIT, TEAM_LIST_TXT, UBC_DIRECTORY_URL
from utils import make_driver


TITLE_CLASS = "w-screen md--w-auto md--mb-molecule-2 md---mx-organism-4 relative"
BODY_CLASS = "node__content clearfix flow-root"
TEAM_WEB_CLASS = (
    "link-button h4 flex p-6 mt-8 border border-neutral-200 "
    "items-center justify-between no-underline"
)


def _parse_team_page(html: str) -> list[str] | None:
    soup = BeautifulSoup(html, "lxml")

    title_div = soup.find("div", class_=TITLE_CLASS)
    if not title_div:
        return None

    name = title_div.find("h1", class_="mt-4").find("span").text.strip()
    categories = title_div.find("h3", class_="h4 uppercase mt-8 md--mt-10").text.strip()

    body_div = soup.find("div", class_=BODY_CLASS)
    time_spans = body_div.find_all(["ul", "p"])[-1].find_all("span")
    times = [s.text.strip() for s in time_spans]

    homepage_a = soup.find("a", class_=TEAM_WEB_CLASS)
    homepage = homepage_a.get("href") if homepage_a else ""

    return [name, categories, *times, homepage]


def run():
    TEAM_LIST_TXT.parent.mkdir(parents=True, exist_ok=True)

    driver = make_driver(headless=True)
    try:
        driver.get(UBC_DIRECTORY_URL)
        time.sleep(PAGE_LOAD_WAIT)

        card_links = driver.find_elements(
            By.CSS_SELECTOR, "article a.no-underline.link-expand"
        )
        team_urls = [a.get_attribute("href") for a in card_links]
        print(f"[stage1] Found {len(team_urls)} team cards")

        with open(TEAM_LIST_TXT, "w", encoding="utf-8") as f:
            for url in team_urls:
                driver.get(url)
                time.sleep(2)

                lines = _parse_team_page(driver.page_source)
                if not lines:
                    print(f"[stage1] skipped (unexpected layout): {url}")
                    continue

                print(f"[stage1] {lines[0]}")
                for line in lines:
                    f.write(line + "\n")
                f.write("\n")
    finally:
        driver.quit()

    print(f"[stage1] wrote {TEAM_LIST_TXT}")


if __name__ == "__main__":
    run()
