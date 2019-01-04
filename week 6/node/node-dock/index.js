const express = require('express')
const app = express()
let BodyParser = require('body-parser');
app.use(BodyParser.json({limit:"10mb"}));
const fs = require('fs')

var fileURL = 'users.json'

app.get('/', (req, res) => {
    res.end('CRUD API')
})

app.post('/create', (req, res) => {
    var data = fs.readFileSync(fileURL)
    var students = JSON.parse(data)
    console.log(students)
    let body = req.body;
    let index = students.findIndex(x => x.id == body.id)
    
    if(index == -1){
        students.push(body)
        fs.writeFileSync(fileURL, JSON.stringify(students, null, 4), 'utf8')
        res.end("Successfully created")
    }
    else{
        res.end("User already esists!")
    }
})

app.post('/update', (req, res) => {
    var data = fs.readFileSync(fileURL)
    var students = JSON.parse(data)
    console.log(students)
    let body = req.body;
    let index = students.findIndex(x => x.id == body.id)
    
    if(index != -1){
        students[index] = body;
        fs.writeFileSync(fileURL, JSON.stringify(students, null, 4), 'utf8')
        res.end("Successfully updated")
    }
    else{
        res.end("User does not esist!")
    }
})

app.delete('/delete', (req, res) => {
    var data = fs.readFileSync(fileURL)
    var students = JSON.parse(data)
    console.log(students)
    let index = students.findIndex(x => x.id == req.query.id)
    console.log(index)
    
    if(index != -1){
        students.splice(index, 1);
        fs.writeFileSync(fileURL, JSON.stringify(students, null, 4), 'utf8')
        res.end("Successfully deleted")
    }
    else{
        res.end("User does not esist!")
    }
})

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

app.listen(3000, () => {
    console.log('Server running at 3000')
})