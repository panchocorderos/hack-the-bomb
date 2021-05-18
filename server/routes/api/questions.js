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

router.get('/:questionId', async (req, res) => {
  const question = await Question.findOne({ 
    where: {
      id: req.params.questionId,
    },
    attributes: ['id', 'question_text', 'levelId']
  });
  const answers = await Answer.findAll({ 
    where: { questionId: question.id},
    raw: true,
    attributes: ['id', 'answer_text', 'is_correct', 'questionId']
  })
  res.json({
    question,
    answers,
  });
});

module.exports = router;