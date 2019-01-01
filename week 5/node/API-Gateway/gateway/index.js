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
    request(url, { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        res.send(body)
    });
})

app.get('/:id', (req, res) => {
    let url = 'http://localhost:4000/' + req.params.id;
    request(url, { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        res.send(body)
    });
})

app.post('/create', (req, res) => {
    let url = 'http://localhost:1000/';
    let body = req.body;
    console.log(body)
    request.post({
        url:url,
        body:body,
        json:true
      }, (error, response, b) => {
        res.json(b)
      });
})

app.post('/update', (req, res) => {
    let url = 'http://localhost:2000/';
    let body = req.body;
    console.log(body)
    request.post({
        url:url,
        body:body,
        json:true
      }, (error, response, b) => {
        res.json(b)
      });
})

app.delete('/delete', (req, res) => {
    let id = req.query.id;
    let url = 'http://localhost:3000/' + id;
    request.delete({
        url:url,
        json:true
      }, (error, response, b) => {
        res.json(b)
      });
})

app.listen(5000, () => console.log('5000'))