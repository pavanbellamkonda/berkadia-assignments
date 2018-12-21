var express = require('express')
var app = express()

//Router level middleware
//user id will be logged reuested to /id endpoint
var logID = function(req, res, next){
    console.log("user id: ", req.params.id)
    next()
};


//Application level middleware
var logIP = function(req, res, next){
    console.log("request ip: ", req.ip)
    next()
}

//line to make logIP Application level middleware
app.use(logIP);

app.get('/', function(req, res){
    res.json({"Hello":"world"});
})

app.get('/:id', logID, function(req, res){
    res.json({"Hello":req.params.id});
})

app.listen(3000, function(req, res){
    console.log("Server listening at port 3000")
})