const express = require('express');
const app = express();

const database = [{id: 1, username: 'abc', password: 'abc'}];

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/test', (req,res) => {
  res.send('text');
});

app.get('/users', (req, res) => {
  res.send(database);
})

app.post('/signup', (req, res) => {
  const {username, password, age, birthday} = req.body;
  database.push({
    username, 
    password,
    age,
    birthday,
  });
  res.send('success');
});

app.post('/login', (req, res) => {
  const {username, password} = req.body;
  const user = database.filter((user) => {
    return user.username === username; //username이 같은 user을 찾아서 return 한다.  
  })
  if(user.length === 0) {
    res.send('해당하는 id가 없습니다.');
    return; //끝내버린다. 
  }
  if (user[0].password !== password) {
    res.send('패스워드가 틀립니다.');
    return;
  }

  res.send('로그인이 성공했습니다!')
});

app.listen(3000, () => {
  console.log('server on!');
})