const express = require('express');

const { Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');

const router = express.Router();

//게시글 작성
router.post('/', isLoggedIn, async (req, res, next) => { //실제로는 POST /post
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//댓글 작성
router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { //실제로는 POST /post
  try {
    const post = await Post.findOne({
      where: {id: req.params.postId},
    });
    if(!post) {
      return res.status(403).send('존재하지 않은 게시글입니다.'); //res가 한번만 이루어져야 하기 때문에 return은 필수이다.
    }
    const comment = await Comment.create({
      content: req.body.content, 
      PostId: req.params.postId,
      UserId: req.user.id,
    })
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/', (req, res) => { //실제로는 DELETE /post
  res.json({ id: 1 });
});

module.exports = router;