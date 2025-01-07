from flask import Flask
import random

# Flask 애플리케이션 객체 생성, name은 모듈의 이름을 나타내며 파일명이 이에 해당하게 된다.
app = Flask(__name__)

# [] -> list
# {} -> dictionary
# 나중에 DB에 넣자
topics = [
  {'id':1, 'title': 'html', 'body': 'html is ...'},
  {'id':2, 'title': 'css', 'body': 'css is ...'},
  {'id':3, 'title': 'javascript', 'body': 'javascript is ...'}
]

# route() decorator
# ''' -> 여러줄을 쓸 때 사용
# f -> 문자열 안에 변수를 섞어 쓸 때
# 반복되는 코드는 템플릿화 할 수 있는데 우선은 함수화해서 사용했다.

def template(contents, content):
  return f'''<!doctype html>
  <html>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        {contents}
      </ol>
      {content}
      <ul>
        <li><a href="/create">create</a></li>
      </ul>
    </body>
  </html>
  '''

def getContents():
  liTags = ''

  # index 이용하고 싶을 때는 enumerate 사용
  for topic in topics:
    liTags += f'<li><a href="/read/{topic["id"]}">{topic["title"]}</a></li>'

  return liTags

@app.route('/')
def index():
  return template(getContents(), '<h2>Welcome</h2>Hello, WEB')

@app.route('/hello/')
def hello():
  return 'Hello'

@app.route('/create/')
def create():
  return 'Create'

@app.route('/read/<int:id>/')
def read(id):
  title = ''
  body = ''

  for topic in topics:
    if id == topic['id']:
      title = topic['title']
      body = topic['body']
      break
    
  print(title, body)

  return template(getContents(), f'<h2>{title}</h2>{body}')

@app.route('/create/')
def create():
  content = '''
    <input type='text' placeholder="title" />
    <textarea>
  '''

  return template(getContents(), content)

app.run(debug=True)
# 실제 서비스를 상용화 할때는 debug=False 해야 한다.
# app.run(port=5001) -> 기본이 5000 포트인데 다른 포트에서 실행하고 싶을 때