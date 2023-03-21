const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let id = 2;
const todoList = [{
  id: 1,
  text: '할일 1',
  done: false,
}];

//각 path에 필요한 server의 data를 넘겨준다.
//프론트랑 약간 다르네.. 오 신기하다. 

app.get('/api/todo', (req, res) => {
  res.json(todoList); 
})

//todo 게시물 추가 
//front에서 post 요청을 하면 app.post가 실행된다. 
app.post('/api/todo', (req, res) => {
  const { text, done } = req.body; //client에서 body에 data를 담아 보낸다. 
  console.log('req.body : ', req.body);
  todoList.push({
    id: id++,
    text, 
    done,
  });
  return res.send('success');
});

app.listen(4000, () => {
  console.log('server start!');
})