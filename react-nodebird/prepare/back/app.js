const express = require('express');
const postRouter = require('./routes/post');
const db = require('./models');

//express를 한번 호출해줘야 한다. 
const app = express();

//서버 실행할때 db sequelize 연결도 같이 된다. 
db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공')
  })
  .catch(console.error);

//아래 부터는 다 router들 이다. 

//get() : 메서드, 주소창에 치는게 get 요청이다. 
//'/' : url
app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/', (req, res) => {
  res.send('hello api');
});

//보통 api들은 json으로 응답한다. 
app.get('/posts', (req, res) => {
  res.json([
    {id: 1, content: 'hello1'},
    {id: 2, content: 'hello2'},
    {id: 3, content: 'hello3'},
  ]);
});

app.post('/post', (req, res) => {
  res.json({id: 1, content: 'hello1'});
});

app.delete('/post', (req, res) => {
  res.json({id: 1, content: 'hello1'});
});

//중복되는 url은 앞으로 뽑아준다. /post 가 접두사처럼 붙게 된다. 
app.use('/post',postRouter);

//백엔드 서버는 3065이다. 
app.listen(3065, () => {
  console.log('서버 실행 중');
});
