const express = require('express')
const app = express()
let BodyParser = require('body-parser');
app.use(BodyParser.json({limit:"10mb"}));
var rp = require('request-promise');

app.get('/', (req, res) => {
    res.end('gateway api')
})

app.get('/all', (req, res) => {
    let url = 'http://localhost:4000/all';
    var options = {
        uri : url,
        json : true
    }
    rp(options).then(function (data){
         console.log(data)
         res.json(data)
     })
    .catch(function (err){
         console.log('fail')
         res.end('fail')
     })
})

app.listen(5000, () => console.log('5000'))