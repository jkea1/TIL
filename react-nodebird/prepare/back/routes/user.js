const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Post } = require('../models');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

const router = express.Router();

router.get('/', async(req, res, next) => { //GET /user
  try {
    if(req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes:['id'], //게시글의 length만 알면 되므로 데이터 문제를 해결하기 위해 id만 가져와도 된다. 
        }, {
          model: User, 
          as: 'Followings',
          attributes:['id'],
        }, {
          model: User, 
          as: 'Followers',
          attributes:['id'],
        }]
      })
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null); //로그인 안할 시 아무것도 안보내 줌
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//local에서의 로그인 전략이 실행된다.
//local에서 성공을 return 했다면 if문 아래가 실행되어 에러를 확인한다.  

//로그인
router.post('/login', isNotLoggedIn, (req, res, next) => {
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

      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes:['id'],
        }, {
          model: User, 
          as: 'Followings',
          attributes:['id'],
        }, {
          model: User, 
          as: 'Followers',
          attributes:['id'],
        }]
      })
    //res.setHeader('Cookie', 'cxlhy')
    //에러가 없다면 json에 user 정보 넘겨주면된다. 
    return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});  

//회원가입
router.post('/', isNotLoggedIn, async (req, res, next) => { // POST /user/
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
//logOut
router.post('/logout', isLoggedIn, (req, res) => {
  console.log("😎", req);
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;