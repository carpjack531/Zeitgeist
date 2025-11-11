from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
    name: str
    password:str
    emailAddress:str
    notifications:bool = False
    dateOfBirth:str = "2022-02-01"

class updateUser(BaseModel):
    name: Optional[str] = None
    password: Optional[str] = None
    emailAddress: Optional[str] = None
    notifications: Optional[bool] = None
    dateOfBirth: Optional[str] = None

class Login(BaseModel):
    emailAddress:str
    password:str

class Bookmark(BaseModel):
    UserId: str
    MoodId: str

#Not using base model since it is not going to be used in the API. This is for backend use
class MoodData:
    Date: str
    Mood1: str
    Mood2: str
    Mood3: str
    Mood4: str
    Mood5: str
    Headlines: str

