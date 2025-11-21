import requests
from bs4 import BeautifulSoup




def getHeadlines():
    url = "https://api.nytimes.com/svc/topstories/v2/home.json"
    r = requests.get(url, params={"api-key": "aMoK16ThTUi4X1PYx5vAvxzkd0GPHR8w"}).json()

    headlines = []
    for item in r["results"][:5]:
        title = item["title"]
        headlines.append(title)

    return headlines

def getCustomMood(link:str):
    response = requests.get(link)
    soup = BeautifulSoup(response.content, "html.parser")

    return soup.title.text
