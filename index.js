var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('index');
var morgan = require('morgan');
var path = require('path')

var app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(8000, () => {
  debug(`Listening on port ${chalk.green('8000')}`);
});