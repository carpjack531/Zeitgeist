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
        usersDB.registerUser(userInfo.name, userInfo.password, userInfo.emailAddress, userInfo.notifications, userInfo.dateOfBirth)
        return {"User": "Registered"}
    except Exception as e:
        return JSONResponse(status_code=400, content={"error": f"{e}"})

@router.post('/login')
def login(userInfo: _classes.Login ):
    result = usersDB.loginUser(userInfo.emailAddress, userInfo.password)
    print(result)
    if result["status"] == "failed":
        return JSONResponse(status_code=401, content={"error": f"{result["message"]}"})
    return result

@router.post("/deleteUser/{Username}")
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

@router.get("/getUser/{Username}")
def getUser( Username : str):
    try:
        user = usersDB.getUser(Username)

        if user == None:
            return JSONResponse(status_code=404, content={"error": "User not found"})
        return {"UserID": user[0], "Name": user[4], "Email": user[1], "DateOfBirth": user[3], "Notifications": user[2]}
    except Exception as e:
        return JSONResponse(status_code=400, content={"error": f"{e}"})


@router.patch("/updateUser/{oldUserID}")
def modifyUser( oldUserID:int, newUser: _classes.updateUser ):
    try:
        exists = usersDB.userExists(oldUserID)
        if not exists:
            return JSONResponse(status_code=404, content={"error": "User not found"})



        usersDB.updateUser(oldUserID, newUser.name, newUser.password, newUser.emailAddress, newUser.notifications, newUser.dateOfBirth)
        return JSONResponse(status_code=200, content={"message": "User updated successfully"})

    except Exception as e:
        return JSONResponse(status_code=400, content={"error": f"{e}"})