import os
import re
from urllib.parse import urljoin, urlparse

from selenium import webdriver

from config import SELENIUM_BROWSER


_URL_RE = re.compile(
    r"^(https?|ftp)://(\S+\.\S+)(\S*)$",
    re.IGNORECASE,
)


def is_relative_link(href: str) -> bool:
    parsed = urlparse(href)
    return not parsed.scheme or not parsed.netloc


def absolute_link(base_url: str, href: str) -> str:
    return urljoin(base_url, href) if is_relative_link(href) else href


def is_url(line: str) -> bool:
    return _URL_RE.match(line.strip()) is not None


def _browser() -> str:
    return (os.environ.get("SELENIUM_BROWSER") or SELENIUM_BROWSER).lower()


def make_driver(headless: bool = True):
    """Return an Edge (Windows dev) or Chrome (Linux CI) WebDriver.

    Selenium Manager auto-resolves the matching driver binary.
    """
    browser = _browser()

    if browser == "chrome":
        options = webdriver.ChromeOptions()
    else:
        options = webdriver.EdgeOptions()

    options.add_argument("--log-level=3")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    if headless:
        options.add_argument("--headless=new")

    if browser == "chrome":
        return webdriver.Chrome(options=options)
    return webdriver.Edge(options=options)


def make_edge_driver(headless: bool = True):
    """Back-compat alias. Picks the right browser based on env."""
    return make_driver(headless=headless)
