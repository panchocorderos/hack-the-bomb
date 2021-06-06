const express = require('express');
const router = express.Router();

const { Question, Answer } =  require('../../db');


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

const questionIdArray = (questions) => {
  let arrayQuestions = [];
  for(let i = 0; i < questions.length; i++){
    arrayQuestions.push(questions[i].id);
  }
  return arrayQuestions;
}

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
    questionArr = questionIdArray(questions);
    const answers = []
    for (let i = 0; i < questionArr.length; i++) {
      answers.push(await Answer.findAll({ 
          where: { questionId: questionArr[i]},
          raw: true,
          attributes: ['id', 'answer_text', 'is_correct', 'questionId']
        })
      );
    }
    // console.log(answers)

    const response = [];

    for (let i = 0; i < questions.length; i++) {
      response.push({
        "question": questions[i].question_text,
        "answers": answerArray(answers[i]),
        "correct": getCorrectAnswer(answers[i]),
      })
    }
    // console.log(response)

    
    res.json(response);
  }
  catch (err) {
    res.status(404);
  }
});

module.exports = router;