import requests
from bs4 import BeautifulSoup
import os
import json
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from fake_useragent import UserAgent
from selenium_stealth import stealth
from time import sleep
import sys

def scrape_urls(base_url, param_name):
    urls = base_url + param_name
    # configure Chrome to start in headless mode
    options = webdriver.ChromeOptions()
    # options.add_argument("--headless")
    # start a Chrome instance
    driver = webdriver.Chrome(options=options)
    # configure the WebDriver to avoid bot detection
    # with Selenium Stealth
    stealth(
    driver,
    user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    languages=["en-US", "en"],
    vendor="Google Inc.",
    platform="Win32",
    webgl_vendor="Intel Inc.",
    renderer="Intel Iris OpenGL Engine",
    fix_hairline=True,
    )

    # connect to the target page
    driver.get(urls) 
    

    element = WebDriverWait(driver, 100).until(
        EC.presence_of_element_located((By.CLASS_NAME, "neDYw.tHlp8d"))
    )
    element.click()
    element2 = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '//*[@aria-label="‪English (United Kingdom)‬"]'))
    )
    element2.click()

    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "QS5gu.sy4vM"))
    )
    element.click()

    
    # Extract all links from the page
    links = driver.find_elements(By.TAG_NAME, "a")
    urls = [link.get_attribute("href") for link in links if link.get_attribute("href")]
    filtered_urls = [url for url in urls if "google" not in url]
    if filtered_urls:
        return filtered_urls
    sleep(500)
    driver.quit()


if __name__ == "__main__":
    base_url = 'https://www.google.com/search?q=allinurl:'  # Replace with the actual URL
    if len(sys.argv) > 1:
        param_name = sys.argv[1]
    else:
        print("Please provide a parameter name.")
        sys.exit(1)
    urls = scrape_urls(base_url, param_name)
    print(urls)
    # for url in urls:
    #     print(url)