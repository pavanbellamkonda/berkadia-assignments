var express = require('express')
var app = express()

//Application level middleware
//ip will be logged every time a request is received for all the routes
app.use(function(req, res, next){
    console.log("request ip:" + req.ip)
    next()
})

app.get('/', function(req, res){
    res.json({"Hello":"world"});
})

app.get('/user', function(req, res){
    res.json({"Hello":"User"});
})

app.listen(3000, function(req, res){
    console.log("Server listening at port 3000")
})