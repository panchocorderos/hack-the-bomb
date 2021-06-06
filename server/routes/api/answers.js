const express = require('express');
const router = express.Router();

const { Answer, Question } =  require('../../db');

const getCorrectAnswer = (answers) => {
  for(let i = 0; i < answers.length; i++) {
    if (answers[i].is_correct === 1) return i;
  }
}

const answerArray = (answers) => {
  let arrayAnswers = [];
  for(let i = 0; i < answers.length; i++) {
    arrayAnswers.push(answers[i].answer_text);
  }
  return arrayAnswers;
}

router.get('/:questionId', async (req, res) => {
  try {
    const answers = await Answer.findAll({ 
      where: { questionId: req.params.questionId},
      raw: true,
      attributes: ['id', 'answer_text', 'is_correct', 'questionId']
    });
    const question = await Question.findAll({
      where: { id: req.params.questionId },
      attributes: ['question_text'],
      raw: true,
    });

    const correct = getCorrectAnswer(answers);
    const answersArr = answerArray(answers);
    res.json({
      "question": question[0].question_text,
      "answers": answersArr,
      correct,
    });
  }
  catch (err) {
    res.status(404);
  }
});
module.exports = router;