const express = require('express');
const router = express.Router();

const apiCodexRouter = require('./api/codexs');
const apiAnswerRouter = require('./api/questions');
const apiLevelRouter = require('./api/levels');


router.use('/codex', apiCodexRouter);
router.use('/question', apiAnswerRouter);
router.use('/level', apiLevelRouter);


module.exports = router;