from starlette.responses import JSONResponse

from extras import ai,data
from datetime import datetime
from data import moodsDB, bookmarkDB
from fastapi import APIRouter
from controllers import _classes

router = APIRouter(
    prefix="/mood",
    tags=["mood"]
)


@router.get('/today')
def getTodaysMood():
    AI = ai.AI()
    index = moodsDB.dateExists(datetime.now().date())
    print(index)
    if index == -1:
        headlines = data.getHeadlines()
        mood = AI.getMood(headlines)

        MData = _classes.MoodData
        MData.Date = str(datetime.now().date())
        for i in range(0,4):
            if i ==0:
                MData.Mood1 = mood.split(", ")[i]
            elif i ==1:
                MData.Mood2 = mood.split(", ")[i]
            elif i==2:
                MData.Mood3 = mood.split(", ")[i]
            elif i==3:
                MData.Mood4 = mood.split(", ")[i]
        MData.Mood5 = mood.split(", ")[4]

        MData.Headlines = "|".join(headlines)

        insertedID = moodsDB.shipIt(MData) #Might need some error handling, unsure

        return {"Moods": [MData.Mood1, MData.Mood2, MData.Mood3, MData.Mood4, MData.Mood5], "MoodID": insertedID}

    else:
        MData = moodsDB.getMoodFromId(index)
        return{"Moods":[MData[2], MData[3], MData[4], MData[5], MData[6]], "MoodID": MData[0]}

@router.get('/history/getOneFromID')
def getOneMoodID(moodID:str):
    try:
        MData = moodsDB.getMoodFromId(moodID)
        return {"Date": MData[1], "Mood1": MData[2], "Mood2":MData[3], "Mood3":MData[4], "Mood4":MData[5],"Mood5":MData[6], "Headlines": MData[7].split("|")}
    except Exception as e:
        return JSONResponse({"message": str(e)}, status_code=500)

@router.get('/history/getOneFromDate')
def getOneMoodDate(Date:str):
    try:
        MData = moodsDB.getMoodFromDate(Date)
        return {"Date": MData[1], "Mood1": MData[2], "Mood2":MData[3], "Mood3":MData[4], "Mood4":MData[5],"Mood5":MData[6], "Headlines": MData[7].split("|")}
    except Exception as e:
        return JSONResponse({"message": str(e)}, status_code=500)

@router.get("/history/getHeadlinesFromID")
def getHeadlines(moodID:str):
    try:
        MData = moodsDB.getHeadlines(moodID)
        return MData
    except Exception as e:
        return JSONResponse({"message": str(e)}, status_code=500)




