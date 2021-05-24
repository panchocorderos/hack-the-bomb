const express = require('express');
const router = express.Router();

const { Topic } =  require('../../db');

router.get('/', async (req, res) => {
  try {
    const topics = await Topic.findAll({
      attributes: ['id', 'name']
    });
    res.json(topics);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;