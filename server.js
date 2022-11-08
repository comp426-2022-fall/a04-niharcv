import { roll } from './lib/roll.js';
import minimist from 'minimist';
import express from 'express';

const args = minimist(process.argv.slice(2));
const port = args.port || 5000

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/app/', function (req, res) {
    res.send('200 OK')
})

app.get('*', function (req, res) {
    res.send('404 NOT FOUND');
})

app.post('/app/roll/', function(req, res) {
    res.send(roll(req.body.sides, req.body.dice, req.body.rolls))
});

app.listen(port)


