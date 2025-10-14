from fastapi import APIRouter
from pydantic import BaseModel
from methods import ai,data
from datetime import datetime


router = APIRouter(
    prefix="/data", #Adds /data to all routes so localhost:8000/data will be the default
    tags=["data"]
)

AI = ai.AI()


class something(BaseModel):
    Mood: str
    day: int



@router.get("/getMood")
def GetMood():
    hasTodaysHeadline = False
    with open("data/pastDates.txt", "r") as textFile:
        dates = textFile.readlines()
        for date in dates:
            if date.split("~")[0] == str(datetime.now().date()):
                hasTodaysHeadline = True
                break

    if hasTodaysHeadline:
        return {"Mood": date.split("|")[1]}

    else:
        headlines = data.getHeadlines()
        mood = AI.getMood(headlines)
        HLs = ""

        for i in range(len(headlines)-1):
            HLs += headlines[i] + "|"
        HLs+= headlines[len(headlines)-1]
        print(HLs)

        with open("data/pastDates.txt", "w") as textFile:
            textFile.write(f"{datetime.now().date()}~{HLs}")


        return {"Mood": mood}
