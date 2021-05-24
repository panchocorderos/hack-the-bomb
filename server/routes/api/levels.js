const express = require('express');
const router = express.Router();

const { Level } =  require('../../db');

router.get('/', async (req, res) => {
  const levels = await Level.findAll({
    attributes: ['id', 'level_number', 'difficulty', 'max_score', 'topicId', 'codexid']
  });
  res.json(levels);
});

router.get('/:topicId', async (req, res) => {
  
  try {
    const levels = await Level.findAll({ 
      where: {
        topicId: req.params.topicId,
      },
      attributes: ['id', 'level_number', 'difficulty', 'max_score', 'topicId', 'codexid']
    });
    res.json({
      levels,
    });
  }
  catch (err) {
    res.status(404);
  }
});

module.exports = router;