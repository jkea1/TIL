const express = require('express');
const argon2 = require('argon2');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const {validUser} = require('./middleware/auth');
const database = require('./database');

//미들웨어로 등록하기 
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.get('/test', (req,res) => {
  res.send('text');
});

app.get('/users', (req, res) => {
  res.send(database);
});

//middleware을 사용하기 위해서 두번째 인자로 middleware를 추가해 주면 된다. 
//이 api를 호출할때 인증이 돼 있는 사용자만 가져갈 수 있어야 한다. 
//client가 보낸 res에 쿠키가 담겨 있는지 확인해야 한다. 
app.get('/secure_data', validUser, (req, res) => {
  res.send('인증된 사용자만 쓸 수 있는 API');
});

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

//로그인을 성공했을때 access_token을 발급해야 한다. -> jsonwebtoken 패키지를 사용한다. 
//암호화 된 비밀번호를 verify 하기 위해 argon2.verify("암호화된 비밀번호", "입력받은 password") 해서 비교한다. 
//같으면 true, 틀리면 false를 return 한다. 
app.post('/login', async (req, res) => {
  const {username, password} = req.body;
  const user = database.filter((user) => {
    return user.username === username; //username이 같은 user을 찾아서 return 한다.  
  });
  if(user.length === 0) {
    res.status(403).send('해당하는 id가 없습니다.'); //forbidden, 4xx : 클라이언트의 잘못이다.
    return; //끝내버린다. 
  }
  if (!(await argon2.verify(user[0].password, password))) {
    res.status(403).send('패스워드가 틀립니다.');
    return;
  }

  const access_token = jwt.sign({ username }, 'secure');
  res.cookie('access_token', access_token, {
    httpOnly: true, //client에서 토큰을 읽을 수 없게 해준다. 
  }); //key-value쌍 형태이다. 
  res.send('로그인이 성공했습니다!')
});

app.listen(3000, () => {
  console.log('server on!');
})