var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('index');
var morgan = require('morgan');

var app = express();

app.use(morgan('tiny'));
app.get('/', (req, res) => {
  res.send('Holawa uwu');
});

app.listen(8000, () => {
  debug(`Listening on port ${chalk.green('8000')}`);
});