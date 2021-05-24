const express = require('express');
const router = express.Router();

const { Answer } =  require('../../db');

router.get('/:questionId', async (req, res) => {
  try {
    const answers = await Answer.findAll({ 
      where: { questionId: req.params.questionId},
      raw: true,
      attributes: ['id', 'answer_text', 'is_correct', 'questionId']
    })
    res.json({
      answers,
    });
  }
  catch (err) {
    res.status(404);
  }
});
module.exports = router;