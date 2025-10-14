from fastapi import APIRouter
from pydantic import BaseModel
from methods import ai,data
import datetime


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
    headlines = data.getHeadlines()
    mood = AI.getMood(headlines)
    

    for headline in headlines:
        print(headline)
    return {"Mood": mood}
