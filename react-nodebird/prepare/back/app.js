const express = require('express');
const cors = require('cors');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const db = require('./models');
const process = require('process');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');

const passportConfig = require('./passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');

//app.js 그리고 router안에 들어가는 건 middleware들이다. 
//(req, res, next) 구조를 갖는다. 외우자.

dotenv.config();
//express를 한번 호출해줘야 한다. 
const app = express();

//서버 실행할때 db sequelize 연결도 같이 된다. 
db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공')
  })
  .catch(console.error);

app.use(morgan('dev'));

//아래 router들 보다 위에 적어줘야 한다. 
app.use(cors({
  origin: "http://localhost:3060", //주소 대신 true 해도 된다. 
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));  
app.use(cookieParser(process.env.COOKIE_SECRET));
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
app.use('/posts', postsRouter);

//중복되는 url은 앞으로 뽑아준다. /post 가 접두사처럼 붙게 된다. 
app.use('/post', postRouter);
app.use('/user', userRouter);

//에러처리 middleware
//원래 내장 되어 있어서 안해도 되지만 에러처리 페이지를 띄워주고 싶다는 등 특별하게 에러처리를 하고 싶은 경우에는 에러처리 미들웨어를 추가한다. 
/* app.use((err, req, res, next) => {

}); */

//백엔드 서버는 3065이다. 
app.listen(3065, () => {
  console.log('서버 실행 중!');
});
