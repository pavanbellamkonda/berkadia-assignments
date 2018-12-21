const express = require('express')
const app = express()
let BodyParser = require('body-parser');
app.use(BodyParser.json({limit:"10mb"}));
const fs = require('fs')

var fileURL = new URL('file:///C:/Users/Pavan/Berkadia/berkadia-assignments/week%205/node/API-Gateway/students.json')

app.get('/all', (req, res) => {
    var data = fs.readFileSync(fileURL)
    var students = JSON.parse(data)
    res.json(students)
})

app.get('/:id', (req, res) => {
    var data = fs.readFileSync(fileURL)
    var students = JSON.parse(data)
    console.log(req.params.id)
    if(students.find(x => x.id == req.params.id))
        res.json(students.find(x => x.id == req.params.id));
    else
        res.end('User does not exist!')
})

app.listen(4000, () => console.log('4000'))