from methods import ai,data
from datetime import datetime
from data import usersDB, moodsDB
from fastapi import APIRouter
from controllers import Classes


router = APIRouter()

@router.post("/register")
def register(userInfo: Classes.User ):
    try:
        usersDB.registerUser(userInfo.name, userInfo.password)
        return {"User": "Registered"}
    except Exception as e:
        return {"error": f"{e}"}

@router.post('/login')
def login(userInfo: Classes.User ):
    result = usersDB.loginUser(userInfo.name, userInfo.password)
    return result

@router.get('/getMood')
def getMood():
    AI = ai.AI()
    index = moodsDB.dateExists(datetime.now().date())
    if index == -1:
        headlines = data.getHeadlines()
        mood = AI.getMood(headlines)

        MData = Classes.MoodData
        MData.Date = f"datetime.now().date()"
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

        for hd in headlines:
            MData.Headlines += f"{hd}|"

    else:
        pass


