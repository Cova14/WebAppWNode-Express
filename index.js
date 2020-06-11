var express = require('express')
var chalk = require('chalk')

var app = express();

app.get('/', (req, res) => {
  res.send('Holawa uwu')
})

app.listen(8000, () => {
  console.log(`Listening on port ${chalk.green('8000')}`)
})