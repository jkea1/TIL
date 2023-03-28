const express = require('express');
const app = express();
const mysql = require('mysql2/promise');


// connection이 제대로 완료가 되어야 db에서 data를 불러올 수 있다.
//app.listen()에 넣어줘서 
let connection;

const database = [
  {id: 1, title: '글1'},
  {id: 2, title: '글2'},
  {id: 3, title: '글3'},
];

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

//http://localhost:3000
//index.html 파일이 열린다. 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/database', async (req, res) => {
  const [rows, fields] = await connection.execute(`SELECT * FROM user`);
  console.log('rows :', rows);
  res.send(rows);
});

//특정 data를 가져오고 싶을때 
app.get('/database/:id', async(req, res) => {
  const id = req.params.id;
  //sql
  const [rows, fields] = await connection.execute(
    `SELECT * FROM user WHERE id=?`,
    [id]
    );
  console.log('rows :', rows);
  /* const data = database.find((el) => el.id === Number(id)); //el = element */
  res.send(rows[0]);
})

//REST API
//생성 : POST
//수정 : PUT, PATCH
//삭제 : DELETE

//http method를 활용하면 
//표현력을 높이고 구조적인 코드를 짤 수 있다. 
//URL 주소는 동일하게 하고 method만 다르게 한다.  

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
//글 추가하기 
app.post('/database', async (req, res) => {
  //한 줄로 짤 수 있다. 
  const {name, age} = req.body;
  /* const name = req.body.name;
  const age = req.body.age; */
  //sql문
  const [rows, fields] = await connection.execute(
    `INSERT INTO user(name, age) VALUES(?, ?)`, 
    [name, age]
    );
  /* database.push({
    id:database.length +1,
    title,
  }) */
  res.send('값 추가가 정상적으로 완료되었습니다.');
});

//데이터 수정하는 방법(UPDATE)
app.put('/database', async (req, res) => {
  //sql문
  const {id, name, age} = req.body;
  /* const id = req.body.id;
  const title = req.body.title;
  database[id-1].title = title; */
  const [rows, fields] = await connection.execute(
    `UPDATE user SET name=?, age=? WHERE id=?`, 
    [name, age, id]
    );
  res.send('값 수정이 정상적으로 완료되었습니다.');
});

//데이터 삭제하는 법
app.delete('/database/:id', async(req, res) => {
  const id = req.params.id; //delete method 같은 경우에는 req.body로 데이터를 전송하지 못하는 경우가 있기 때문에 url parameter로 전달한다. 
  //sql
  const [rows, fields] = await connection.execute(
    `DELETE FROM user WHERE id=?`, 
    [id]
    );
  /* database.splice(id - 1, 1); */
  res.send('값 삭제가 정상적으로 완료되었습니다.');
});

//서버를 띄울때 비동기적으로 connection이 연결된후에 실행할 수 있도록 한다. 
//서버가 db에 connection이 되어야 db에서 정보를 가져올 수 있다. 안되면 콜백함수 에러가 뜬다.  
app.listen(3000, async() => {
  // create the connection to database
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'myapp',
    password: 'root',
  });
  
  console.log('server on!');
});