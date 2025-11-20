import requests
from bs4 import BeautifulSoup




def getHeadlines():
    url = "https://api.nytimes.com/svc/topstories/v2/home.json"
    r = requests.get(url, params={"api-key": "aMoK16ThTUi4X1PYx5vAvxzkd0GPHR8w"}).json()

    headlines = []
    for item in r["results"][:5]:
        headlines.append(item["title"])

# def getHeadlines():
#     headlines = []
#     # Fetch and parse the page
#     response = requests.get('https://www.ms.now/')
#     soup = BeautifulSoup(response.content, 'html.parser')
#
#     # Find the main content container
#     content_div = soup.find_all('h3', class_='styles_headline__bFHa5')
#
#     for content in content_div:
#         headlines.append(content.text)
#     return headlines
