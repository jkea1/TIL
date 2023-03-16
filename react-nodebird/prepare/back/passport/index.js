//passport 설정파일이다. 
const passport = require('passport');
const local = require('./local');
const {User} = require('../models');


module.exports = () => {
  //로그인을하면 user의 id가 저장된다. 
  passport.serializeUser((user, done) => {
    done(null, user.id); //user id만 저장
  });

  //로그인 성공 후 요청부터 실행된다.
  //id를 사용해 db에서 사용자 정보 전체를 복구해 낸다. -> req.user안에 넣어준다.
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id }});
      done(null, user); //req.user로 만든다. 저장해 놨던 id를 토대로 복원 할때는 user의 전체 정보 복원
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};