const express = require('express');
const router = express.Router();

const { Level } =  require('../../db');

router.get('/', async (req, res) => {
  const levels = await Level.findAll({
    attributes: ['id', 'level_number', 'difficulty', 'max_score', 'topicId', 'codexid']
  });
  res.json(levels);
});

module.exports = router;