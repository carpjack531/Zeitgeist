from fastapi import APIRouter
from data import bookmarkDB
from controllers import _classes
from fastapi.responses import JSONResponse

router = APIRouter(
    prefix="/bookmark", #Adds /data to all routes so localhost:8000/data will be the default
    tags=["bookmark"]
)
@router.post('/add')
def addBookmark(data:_classes.Bookmark):
    try:
        bookmarkDB.addBookmark(data.UserId, data.MoodId)
        return {"message": "Bookmark Added"}
    except Exception as e:
        return JSONResponse({"message": str(e)}, status_code=500)

@router.delete('/delete')
def deleteBookmark(data:_classes.Bookmark):
    try:
        success = bookmarkDB.deleteBookmark(data.UserId, data.MoodId)
        if success:
            return {"message": "Bookmark Deleted"}
        return JSONResponse({"message": "Bookmark Not Found"}, status_code=404)
    except Exception as e:
        return {"error": f"{e}"}

@router.get('/getOne') #I don't think this will be used. EVER Unless we get more data in the bookmarks.
def getBookmark(UserId:int, MoodId:int):
    try:
        bookmark = bookmarkDB.getBookmark(UserId, MoodId)
        return {"Bookmark": bookmark}
    except Exception as e:
        return JSONResponse({"message": str(e)}, status_code=500)

@router.get('/getAll')
def getAllBookmarks(UserID:str):
    try:
        bookmarks = bookmarkDB.getAllBookmarks(UserID)
        return {"bookmarks": bookmarks}
    except Exception as e:
        return JSONResponse({"message": str(e)}, status_code=500)
