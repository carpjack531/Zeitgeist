from fastapi import APIRouter
from data import usersDB
from fastapi.responses import JSONResponse
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
        return JSONResponse(status_code=400, content={"error": f"{e}"})

@router.post('/login')
def login(userInfo: _classes.User ):
    result = usersDB.loginUser(userInfo.name, userInfo.password)
    print(result)
    if result["status"] == "failed":
        return JSONResponse(status_code=401, content={"error": f"{result["message"]}"})
    return result

@router.post("/deleteUser")
def deleteUser( Username : str ):
    try:
        status = usersDB.deleteUser(Username)
        if status == 0:
            return JSONResponse(status_code=404, content={"message": "User not found"})
        return JSONResponse(status_code=200, content={"message": "User deleted"})
    except Exception as e:
        return JSONResponse(status_code=400, content={"error": f"{e}"})

@router.get("/getAll")
def getAllUsers():
    try:
        users = usersDB.getAllUsers()
        return {"Users": users}
    except Exception as e:
        return JSONResponse(status_code=400, content={"error": f"{e}"})
