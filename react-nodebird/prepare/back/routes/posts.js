const express = require('express');

const { Post, Image, User, Comment } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { //GET /posts
  try {
    const posts = await Post.findAll({
      limit: 10, //10개씩 가져오게 한다.
      order: [
        ['createdAt', 'DESC'], 
        [Comment, 'createAt', 'DESC'],//댓글을 내림차순으로 정렬
      ],
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }]
      }],
    });
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;