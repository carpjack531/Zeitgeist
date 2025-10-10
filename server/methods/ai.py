#TODO: Everything
import cohere
from dotenv import load_dotenv
import os

class AI():
    def __init__(self):
        load_dotenv()
        key = os.getenv("cohere")
        self.cohere = cohere.Client(key)

    def getMood(self, headlines:list):
        data = ""
        counter = 1
        for headline in headlines:
            data += f"Headline {counter}: {headline}\n"
            counter += 1
        mood = self.cohere.chat(
            message= data,
            model="command-r-plus-08-2024",
            temperature=0.2,
            preamble="""You are to get all the headlines you are given and give a mood according to these headlines. 
            The mood could be whatever, as long as it's fitting for all the headlines.
            The structure of the headlines will be "Headline (number): (data)" where number is the number of the headline and data is the headline.
            You are to keep track of all headlines separated by 'Headline (number)' and understand the data from each to give an accurate mood
            You are to give the top 5 moods for each group of headlines. Keep them consice and short
            Don't explain the reasoning, just give them like: 25% Hopeful, 25% Suspenseful, 25% Cheerful, 10% Dreamy, 15% Dark"""
        )
        return mood.text
