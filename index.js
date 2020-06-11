var express = require('express')

var app = express();

app.get('/', (req, res) => {
  res.send('Holawa uwu')
})

app.listen(8000, () => {
  console.log('Listening on port 8000')
})