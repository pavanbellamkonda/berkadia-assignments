var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/retrieve', function (req, res) {
    let data = fs.readFileSync('data.json', 'utf8');
    let json = JSON.parse(data);
    console.log(JSON.stringify(json, null, 4))
    res.end(JSON.stringify(json, null, 4))
 })

 app.put('/create', function(req, res) {
    collectRequestData(req, result => {
        let pres = JSON.parse(result)
        let data = fs.readFileSync('data.json', 'utf8');
        let json = JSON.parse(data);
        for(var key in pres){
            if (key in json)
                res.end("User(s) already exists!")
            else
                json[key] = pres[key]
        }
        fs.writeFileSync('data.json', JSON.stringify(json, null, 4), 'utf8')
        console.log(JSON.stringify(json, null, 4))
        res.end(JSON.stringify(json, null, 4))
 });
});

app.post('/update', function(req, res){
    collectRequestData(req, result => {
        let pres = JSON.parse(result)
        let data = fs.readFileSync('data.json', 'utf8');
        let json = JSON.parse(data);
        for(var key in pres){
            if (key in json)
                json[key] = pres[key]
            else
                res.end("User(s) does not exist!")
        }
        fs.writeFileSync('data.json', JSON.stringify(json, null, 4), 'utf8')
        console.log(JSON.stringify(json, null, 4))
        res.end(JSON.stringify(json, null, 4))
    });
});

app.delete('/delete', function(req, res){
    collectRequestData(req, result => {
        let pres = JSON.parse(result)
        let data = fs.readFileSync('data.json', 'utf8');
        let json = JSON.parse(data);
        for(var key in pres){
            if (key in json)
                delete json[key]
            else
                res.end("User(s) does not exist!")
        }
        fs.writeFileSync('data.json', JSON.stringify(json, null, 4), 'utf8')
        console.log(JSON.stringify(json, null, 4))
        res.end(JSON.stringify(json, null, 4))
    });
})

var server = app.listen(8081, function () {
   var port = server.address().port
   console.log("Server listening at http://localhost:%s", port)
})

function collectRequestData(request, callback) {
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        callback(body);
    });
}