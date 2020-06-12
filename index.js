const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('index');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(8000, () => {
  debug(`Listening on port ${chalk.green('8000')}`);
});
