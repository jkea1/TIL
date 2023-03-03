const express = require('express');

const router = express.Router();
router.post('/', (req, res) => { //실제로는 POST /post
  res.json({id: 1, content: 'hello' });
});

router.delete('/', (req, res) => { //실제로는 DELETE /post
  res.json({ id: 1 });
});

module.exports = router;