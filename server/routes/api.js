const express = require('express');
const router = express.Router();

const apiCodexRouter = require('./api/codexs');
const apiQuestionRouter = require('./api/questions');
const apiLevelRouter = require('./api/levels');
const apiTopicRouter = require('./api/topics');
const apiAnswerRouter = require('./api/answers');


router.use('/codex', apiCodexRouter);
router.use('/question', apiQuestionRouter);
router.use('/level', apiLevelRouter);
router.use('/topic', apiTopicRouter);
router.use('/answer', apiAnswerRouter);


module.exports = router;