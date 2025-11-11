from fastapi import FastAPI
from controllers import *
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(moodController.router,tags=["mood"])
app.include_router(userController.router,tags=["user"])
app.include_router(bookmarkController.router,tags=["bookmark"])

@app.get("/")
async def root():
    return {"message": "Hello World"}

