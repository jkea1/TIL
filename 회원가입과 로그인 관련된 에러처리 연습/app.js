const express = require('express');
const argon2 = require('argon2');
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

//암호는 암호화 해줘야 한다. 
//argon2.hash("password")해서 암호화 해줘야 한다.  
app.post('/signup', async (req, res) => {
  const {username, password, age, birthday} = req.body;
  const hash = await argon2.hash(password);

  database.push({
    username, 
    password: hash,
    age,
    birthday,
  });
  res.send('success');
});

//암호화 된 비밀번호를 verify 하기 위해 argon2.verify("암호화된 비밀번호", "입력받은 password") 해서 비교한다. 
//같으면 true, 틀리면 false를 return 한다. 
app.post('/login', async (req, res) => {
  const {username, password} = req.body;
  const user = database.filter((user) => {
    return user.username === username; //username이 같은 user을 찾아서 return 한다.  
  });
  if(user.length === 0) {
    res.send('해당하는 id가 없습니다.');
    return; //끝내버린다. 
  }
  if (!(await argon2.verify(user[0].password, password))) {
    res.send('패스워드가 틀립니다.');
    return;
  }

  res.send('로그인이 성공했습니다!')
});

app.listen(3000, () => {
  console.log('server on!');
})