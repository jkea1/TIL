from fastapi import FastAPI
app = FastAPI()

from fastapi.responses import FileResponse

@app.get("/")
def getHello():
  return 'hello'

@app.get("/data")
def getData():
  return {'hello' : 1234}

@app.get("/html")
def getHtml():
  return FileResponse('index.html')

from pydantic import BaseModel
class Model(BaseModel):
  name :str
  phone :int

@app.post("/send")
def send(data : Model):
  print(data)
  return '전송완료'