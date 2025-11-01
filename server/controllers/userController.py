from fastapi import APIRouter
from data import usersDB
from controllers import _classes

router = APIRouter(
    prefix="/user", #Adds /data to all routes so localhost:8000/data will be the default
    tags=["user"]
)


@router.post("/addUser")
def register(userInfo: _classes.User ):
    try:
        usersDB.registerUser(userInfo.name, userInfo.password)
        return {"User": "Registered"}
    except Exception as e:
        return {"error": f"{e}"}

@router.post('/login')
def login(userInfo: _classes.User ):
    result = usersDB.loginUser(userInfo.name, userInfo.password)
    return result

@router.post("/deleteUser")
def deleteUser( Username : str ):
    try:
        usersDB.deleteUser(Username)
        return {"User": "Deleted"}
    except Exception as e:
        return {"error": f"{e}"}

@router.get("/getAll")
def getAllUsers():
    try:
        users = usersDB.getAllUsers()
        return {"Users": users}
    except Exception as e:
        return {"error": f"{e}"}