const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { User } = require('../models'); //data로 만들어 두었던 sequalize를 재사용한다.  
const bcrypt = require('bcrypt');

//로그인 전략
//위에서 아래로 흐름이 직관적이다. 
//1. email 있는지 검사한다. 1-1. email 없으면 존재하지 않은 이메일이라고 보내준다. 
//2. email 존재하면 비밀번호 비교해서 일치하면 done으로 user 정보 보내준다. 2-1 비밀번호 일치 안하면 비밀번호 틀렸습니다 라고 보내준다. 
module.exports = () => {
  passport.use(new LocalStrategy({
    usernameFeild: 'email',
    passwordField: 'password',
  }, async (email, password, done) => {
    try {
      const user = await User.findOne({
        where: { email }
      });
      if(!user) {
        //순서가 중요하다. (서버 에러, 성공, 클라이언트 에러)
        return done(null, false, { reason: '존재하지 않는 이메일입니다!'});
      }
      //compare도 비동기 함수라서 await 붙여줘야 한다. 
      const result = await bcrypt.compare(password, user.password);
      if(result) {
        return done(null, user);//성공 시 사용자 정보 넘겨 주기 
      }
      return done(null, false, {reason: '비밀번호가 틀렸습니다.'});
    } catch (error) {
      console.error(error);
      return done(error);
    }

  }));
};