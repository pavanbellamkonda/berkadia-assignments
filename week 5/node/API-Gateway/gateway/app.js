const express = require('express')
const app = express()
let BodyParser = require('body-parser');
app.use(BodyParser.json({limit:"10mb"}));
const request = require('request');

app.get('/', (req, res) => {
    res.end('gateway api')
})

app.get('/all', (req, res) => {
    let url = 'http://localhost:4000/all';
    request(url, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
    });
    res.end('hi')
})

app.listen(5000, () => console.log('5000'))