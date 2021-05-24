const express = require('express');
const router = express.Router();

const { Question, Answer } =  require('../../db');

router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll({
      attributes: ['id', 'question_text', 'levelId']
    });
    res.json(questions);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:levelId', async (req, res) => {

  try {
    const questions = await Question.findAll({ 
      where: {
        levelId: req.params.levelId,
      },
      attributes: ['id', 'question_text', 'levelId']
    });
    res.json({
      questions,
    });
  }
  catch (err) {
    res.status(404);
  }
});

module.exports = router;