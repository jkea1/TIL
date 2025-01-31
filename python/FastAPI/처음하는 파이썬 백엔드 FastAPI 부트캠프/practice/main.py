from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Image(BaseModel):
    url: str
    name: str

class Item(BaseModel):
    name: str
    description: str
    image: Image
    variant: Union[int, str]

@app.post("/items/")
def create_item(item: Item):
    return {"item": item}