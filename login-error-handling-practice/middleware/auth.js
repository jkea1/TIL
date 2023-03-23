const database = require('../database');
const jwt = require('jsonwebtoken');

//반복되는 로직은 미들웨어로 만들어서 뺄 수 있다. 
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
    next(); //이 코드가 실행되면 app.js에서 다음 api를 호출할 수 있게 한다. 
  } catch (err) {
    if(!userInfo) {
      res.status(401).send('유효한 access token이 아닙니다.');
    }
  }
};

module.exports = {
  validUser,
}