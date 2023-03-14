const express = require('express');
const cors = require('cors');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const process = require('process');
const passport = require('passport');
const dotenv = require('dotenv');

const passportConfig = require('./passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');

dotenv.config();
//express를 한번 호출해줘야 한다. 
const app = express();

//서버 실행할때 db sequelize 연결도 같이 된다. 
db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공')
  })
  .catch(console.error);


//아래 router들 보다 위에 적어줘야 한다. 
app.use(cors({
  origin: "*", 
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));  
app.use(cookieParser('nodebirdsecret'));
app.use(session({
  saveUninitialized : false,
  resave : false, 
  secret: process.env.COOKIE_SECRET, 
}));
app.use(passport.initialize());
app.use(passport.session());

//app.js 중앙 통제실 같은 역할이다.  
passportConfig();

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
app.use('/post', postRouter);
app.use('/user', userRouter);

//백엔드 서버는 3065이다. 
app.listen(3065, () => {
  console.log('서버 실행 중!');
});
