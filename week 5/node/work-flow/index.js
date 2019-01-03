const express = require('express')
const app = express()
const fs = require('fs')
const BodyParser = require('body-parser');
app.use(BodyParser.json({ limit: "10mb" }));

var table = {
    "1" : "http://localhost:3000/bronze",
    "2" : "http://localhost:3000/silver",
    "3" : "http://localhost:3000/gold",
    "4" : "http://localhost:3000/platinum",
    "5" : "http://localhost:3000/crown"    
}

//Endpoint to create user
app.all('/', (req, res) => {
    if(req.method === 'GET'){
        res.end('Create user by posting to this url')
    }
    else if(req.method === 'POST' || req.method === 'PUT'){
        var name = req.body.name;
        var user = {"name":name, "level":1}
        var data = JSON.parse(fs.readFileSync('users.json'))
        data.push(user)
        fs.writeFileSync('users.json', JSON.stringify(data))
        res.end('user created')
    }
})

//Allowed to level 1 users
app.get('/bronze', (req, res) => {
    var name = req.query.name;
    var users = JSON.parse(fs.readFileSync('users.json'))
    var user = users.find(user => user.name === name)
    var level = user.level
    if(level === 1){
        users.find(user => user.name === name).level = level + 1;
        fs.writeFileSync('users.json', JSON.stringify(users))
        res.json({"entry":"allowed", "next":"http://localhost:3000/silver"})
    }
    else {
        res.json({"entry":"allowed", "next": table[level.toString()]})
    }
})

//Allowed to level 2 users
app.get('/silver', (req, res) => {
    var name = req.query.name;
    var users = JSON.parse(fs.readFileSync('users.json'))
    var user = users.find(user => user.name === name)
    var level = user.level
    if(level === 2){
        users.find(user => user.name === name).level = level + 1;
        fs.writeFileSync('users.json', JSON.stringify(users))
        res.json({"entry":"allowed", "next":"http://localhost:3000/gold"})
    }
    else if(user.level < 2){
        res.json({"entry":"not allowed", "next": table[level.toString()]})
    }
    else {
        res.json({"entry":"allowed", "next": table[level.toString()]})
    }
})

//Allowed to level 3 users
app.get('/gold', (req, res) => {
    var name = req.query.name;
    var users = JSON.parse(fs.readFileSync('users.json'))
    var user = users.find(user => user.name === name)
    var level = user.level
    if(level === 3){
        users.find(user => user.name === name).level = level + 1;
        fs.writeFileSync('users.json', JSON.stringify(users))
        res.json({"entry":"allowed", "next":"http://localhost:3000/platinum"})
    }
    else if(user.level < 3){
        res.json({"entry":"not allowed", "next": table[level.toString()]})
    }
    else {
        res.json({"entry":"allowed", "next": table[level.toString()]})
    }
})

//Allowed to level 4 users
app.get('/platinum', (req, res) => {
    var name = req.query.name;
    var users = JSON.parse(fs.readFileSync('users.json'))
    var user = users.find(user => user.name === name)
    var level = user.level
    if(level === 4){
        users.find(user => user.name === name).level = level + 1;
        fs.writeFileSync('users.json', JSON.stringify(users))
        res.json({"entry":"allowed", "next":"http://localhost:3000/crown"})
    }
    else if(user.level < 4){
        res.json({"entry":"not allowed", "next": table[level.toString()]})
    }
    else {
        res.json({"entry":"allowed", "next": table[level.toString()]})
    }
})

//Allowed to level 5 users
app.get('/crown', (req, res) => {
    var name = req.query.name;
    var users = JSON.parse(fs.readFileSync('users.json'))
    var user = users.find(user => user.name === name)
    var level = user.level
    if(level === 5){
        res.json({"entry":"allowed", "next":"reached maximum level"})
    }
    else {
        res.json({"entry":"not allowed", "next": table[level.toString()]})
    }
})

app.listen(3000, () => {
    console.log('Listening at port 3000')
})

