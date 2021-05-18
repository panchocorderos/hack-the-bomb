const express = require('express');
const router = express.Router();

const { Codex } =  require('../../db');

router.get('/', async (req, res) => {
  try {
    const codexs = await Codex.findAll({
      attributes: ['id', 'text']
    });
    res.json(codexs);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;