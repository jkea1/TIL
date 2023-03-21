const express = require('express');
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const database = [
  {id: 1, title: '글1'},
  {id: 2, title: '글2'},
  {id: 3, title: '글3'},
];

//http://localhost:3000
//index.html 파일이 열린다. 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/database', (req, res) => {
  res.send(database);
});

//특정 data를 가져오고 싶을때 
app.get('/database/:id', (req, res) => {
  const id = req.params.id;
  const data = database.find((el) => el.id === Number(id)); //el = element
  res.send(data);
})

//데이터를 가져오는 방법 1 : params 이용하기 
/* app.post('/database/:title', function (req, res) {
  const title = req.params.title;
  res.send(database);
  database.push({
    id:database.length +1,
    title,
  })
  res.send('값 추가가 정상적으로 완료되었습니다.');
}) */

//데이터를 가져오는 방법 2 : req.body 이용하기 
app.post('/add-database', (req, res) => {
  const title = req.body.title;
  database.push({
    id:database.length +1,
    title,
  })
  res.send('값 추가가 정상적으로 완료되었습니다.');
});

//데이터 수정하는 방법
app.post('/update-database', (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  database[id-1].title = title;
  res.send('값 수정이 정상적으로 완료되었습니다.');
});

//데이터 삭제하는 법
app.post('/delete-database', (req, res) => {
  const id = req.body.id;
  database.splice(id-1, 1);
  res.send('값 삭제가 정상적으로 완료되었습니다.');
});

app.listen(3000, () => {
  console.log('server on!');
});