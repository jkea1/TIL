const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User } = require('../models');

const router = express.Router();

//local에서의 로그인 전략이 실행된다.
//local에서 성공을 return 했다면 if문 아래가 실행되어 에러를 확인한다.  
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    //서버에러
    if(err) {
      console.error(err);
      return next(err);
    }
    //클라이언트 에러
    if (info) {
      return res.status(401).send(info.reason);
    }
    //성공시 passport에서 로그인 할 수 있게 허락 해준다. 
    return req.login(user, async (loginErr) => {
      if(loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      //res.setHeader('Cookie', 'cxlhy')
    //에러가 없다면 json에 user 정보 넘겨주면된다. 
    return res.status(200).json(user);
    });
  })(req, res, next);
});  

router.post('/', async (req, res, next) => { // POST /user/
  try {
    const exUser = await User.findOne({
      //조건을 넣어줘야 한다. 
      where: {
        email: req.body.email,
      }
    })

    if(exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.')
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 13); //bcrypt도 비동기여서 await을 써야한다. 
    await User.create({ //table 안에 data를 넣는다. await을 붙여야 실제로 들어간다. 
      email : req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
  });
    res.status(201).send('ok');
  } catch (error) {
    console.error(error);
    next(error); //status 500 에러
  }
});

//login 성공 후 부터는 req.user에 정보가 들어가 있다. 
//logout은 세션과 쿠키만 지워주면 된다. 
router.post('/user/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;