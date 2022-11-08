// Require minimist module (make sure you install this one via npm).
const args = require('minimist')(process.argv.slice(2));

const port = args.port || 5000

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/app/', function (req, res) {
    res.send('200 OK')
})

app.get('*', function (req, res) {
    res.send('404 NOT FOUND');
})

app.listen(port)