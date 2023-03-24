const database = require('../database');
const jwt = require('jsonwebtoken');

//반복되는 로직은 미들웨어로 만들어서 뺄 수 있다. 
//access_token을 열어보는 코드를 매 api마다 호출을 해야 한다.
//이렇게 반복되는 작업은 middleware 함수로 만들어서 빼주는 게 좋다. 

const validUser= (req, res, next) => {
  const { access_token } = req.cookies;
  if(!access_token) {
    res.status(401).send('access token이 없습니다.')
  }
  try {
    //객체 구조 분해 할당
    const { username } = jwt.verify(access_token, 'secure');
    const userInfo = database.find((data) => data.username === username);
    if(!userInfo) {
      throw 'user info가 없습니다.';
    }
    next(); //이 코드가 실행되면 app.js에서 두번째 매개인자로 validUser를 가지고 있는 함수가 실행된다. 
  } catch (err) {
    if(!userInfo) {
      res.status(401).send('유효한 access token이 아닙니다.');
    }
  }
};

module.exports = {
  validUser,
}