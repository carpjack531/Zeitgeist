import requests
from bs4 import BeautifulSoup




def getHeadlines():
    headlines = []
    # Fetch and parse the page
    response = requests.get('https://www.msnbc.com/')
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find the main content container
    content_div = soup.find_all('h3', class_='styles_headline__bFHa5')

    for content in content_div:
        headlines.append(content.text)
    return headlines
