var express = require('express')
var app = express()

//Application level middleware
//ip will be logged every time a request is received for all the routes
app.use(function(req, res, next){
    console.log("request ip:" + req.ip)
    next()
})

app.get('/', function(req, res, next){
    res.json({"Hello":"world"});
    throw new Error("Error!")
})

app.get('/user', function(req, res){
    res.json({"Hello":"User"});
})


app.use(function (err, req, res, next) {
    res.json({"message":err.message})
})

app.listen(3000, function(req, res){
    console.log("Server listening at port 3000")
})