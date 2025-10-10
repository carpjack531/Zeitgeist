from fastapi import FastAPI
from controllers import dataControllers

app = FastAPI()

app.include_router(dataControllers.router,tags=["data"])

@app.get("/")
async def root():
    return {"message": "Hello World"}