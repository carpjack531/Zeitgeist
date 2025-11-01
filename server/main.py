from fastapi import FastAPI
from controllers import *

app = FastAPI()

app.include_router(moodController.router,tags=["mood"])
app.include_router(userController.router,tags=["user"])
app.include_router(bookmarkController.router,tags=["bookmark"])

@app.get("/")
async def root():
    return {"message": "Hello World"}

