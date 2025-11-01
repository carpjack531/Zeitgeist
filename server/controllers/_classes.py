from pydantic import BaseModel

class something(BaseModel):
    string: str
#Data structure that will host everything

class User(BaseModel):
    name: str
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

