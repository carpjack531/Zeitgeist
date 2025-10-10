from fastapi import APIRouter
from pydantic import BaseModel
import methods

router = APIRouter(
    prefix="/data", #Adds /data to all routes so localhost:8000/data will be the default
    tags=["data"]
)
AI = methods.ai.AI()

class something(BaseModel):
    Mood: str
    day: int



@router.get("/getMood")
def GetMood():
    mood = AI.getMood([
        "Sanae Takaichi set to become Japan's first female prime minister",
        "Ottawa police are looking for an 80-year-old woman missing since Saturday morning",
        "50 people die in a plane crash",
        "People from Canada Lose their pets in the tsunami",

        ])
    return {"Mood": mood}
