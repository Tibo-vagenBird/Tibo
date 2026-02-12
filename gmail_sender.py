"""
Gmail Auto Email Sender using Selenium with Microsoft Edge WebDriver.

Usage:
    python gmail_sender.py --to recipient@example.com --subject "Test" --body "Hello"

Prerequisites:
    1. pip install selenium
    2. Microsoft Edge browser installed
    3. Edge WebDriver (msedgedriver.exe) matching your Edge version,
       OR let Selenium Manager handle it automatically (Selenium 4.6+).
"""

import argparse
import time
import getpass

from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


GMAIL_URL = "https://mail.google.com/"
LOGIN_TIMEOUT = 120  # seconds to wait for manual 2FA / CAPTCHA


def create_driver(headless=False):
    """Create and return an Edge WebDriver instance."""
    options = Options()
    if headless:
        options.add_argument("--headless=new")
    # Keep the browser open long enough and avoid detection flags
    options.add_argument("--start-maximized")
    options.add_argument("--disable-blink-features=AutomationControlled")
    options.add_experimental_option("excludeSwitches", ["enable-automation"])

    # Selenium 4.6+ will auto-download the matching driver if not found
    driver = webdriver.Edge(options=options)
    return driver


def login(driver, email, password):
    """Log into Google account via the Gmail login page."""
    driver.get(GMAIL_URL)
    wait = WebDriverWait(driver, LOGIN_TIMEOUT)

    # --- Enter email ---
    email_input = wait.until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, 'input[type="email"]'))
    )
    email_input.clear()
    email_input.send_keys(email)
    email_input.send_keys(Keys.ENTER)

    # --- Enter password ---
    password_input = wait.until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, 'input[type="password"]'))
    )
    time.sleep(1)  # brief pause for animation
    password_input.clear()
    password_input.send_keys(password)
    password_input.send_keys(Keys.ENTER)

    # --- Wait until Gmail inbox loads ---
    # If 2FA is enabled, the user must complete it manually in the browser window.
    print("Waiting for Gmail inbox to load (complete any 2FA prompts in the browser)...")
    wait.until(EC.url_contains("mail.google.com/mail"))
    # Wait for the Compose button to appear as a reliable inbox-loaded signal
    wait.until(
        EC.element_to_be_clickable((By.CSS_SELECTOR, 'div[gh="cm"]'))
    )
    print("Login successful.")


def send_email(driver, to, subject, body):
    """Compose and send an email in the Gmail web UI."""
    wait = WebDriverWait(driver, 30)

    # Click "Compose"
    compose_btn = wait.until(
        EC.element_to_be_clickable((By.CSS_SELECTOR, 'div[gh="cm"]'))
    )
    compose_btn.click()
    time.sleep(1)

    # Fill in the "To" field
    to_field = wait.until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, 'input[aria-label="To"]'))
    )
    # Fallback: sometimes the aria-label differs by locale
    if not to_field:
        to_field = driver.find_element(By.NAME, "to")
    to_field.send_keys(to)
    time.sleep(0.5)
    to_field.send_keys(Keys.ENTER)

    # Fill in the "Subject" field
    subject_field = wait.until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, 'input[name="subjectbox"]'))
    )
    subject_field.send_keys(subject)

    # Fill in the body
    body_field = wait.until(
        EC.visibility_of_element_located(
            (By.CSS_SELECTOR, 'div[aria-label="Message Body"]')
        )
    )
    # Fallback for different locales
    if not body_field:
        body_field = driver.find_element(By.CSS_SELECTOR, 'div[role="textbox"]')
    body_field.click()
    body_field.send_keys(body)

    # Click "Send"
    time.sleep(0.5)
    send_btn = wait.until(
        EC.element_to_be_clickable((By.CSS_SELECTOR, 'div[aria-label*="Send"]'))
    )
    send_btn.click()

    # Wait for the "Message sent" confirmation
    time.sleep(3)
    print(f"Email sent to {to}.")


def main():
    parser = argparse.ArgumentParser(description="Send email via Gmail using Selenium + Edge")
    parser.add_argument("--to", required=True, help="Recipient email address")
    parser.add_argument("--subject", default="", help="Email subject")
    parser.add_argument("--body", default="", help="Email body text")
    parser.add_argument("--email", help="Your Gmail address (prompted if omitted)")
    parser.add_argument("--password", help="Your Gmail password (prompted if omitted)")
    parser.add_argument("--headless", action="store_true", help="Run in headless mode (not recommended for Gmail)")
    args = parser.parse_args()

    email = args.email or input("Gmail address: ")
    password = args.password or getpass.getpass("Gmail password: ")

    driver = create_driver(headless=args.headless)
    try:
        login(driver, email, password)
        send_email(driver, args.to, args.subject, args.body)
    except Exception as e:
        print(f"Error: {e}")
        raise
    finally:
        time.sleep(2)
        driver.quit()


if __name__ == "__main__":
    main()
