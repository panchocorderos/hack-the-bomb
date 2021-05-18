require('dotenv').config();
const { PORT } = process.env;

const express = require('express');
const app = express();

const apiRouter = require('./routes/api');

require('./db');

app.use(express.json());

app.use('/api', apiRouter);

app.listen( PORT, () => {
  console.log(`Server running on port ${PORT}`);
});