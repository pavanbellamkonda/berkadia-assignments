const express = require('express')
const app = express()
let BodyParser = require('body-parser');
app.use(BodyParser.json({limit:"10mb"}));
const fs = require('fs')

var fileURL = new URL('file:///C:/Users/Pavan/Berkadia/berkadia-assignments/week%205/node/API-Gateway/students.json')


app.get('/', (req, res) => {
    res.end('server 3 - delete user')
})

app.delete('/:id', (req, res) => {
    var data = fs.readFileSync(fileURL)
    var students = JSON.parse(data)
    console.log(students)
    let index = students.findIndex(x => x.id == req.params.id)
    console.log(index)
    
    if(index != -1){
        students.splice(index, 1);
        fs.writeFileSync(fileURL, JSON.stringify(students, null, 4), 'utf8')
        //fs.close()
        res.end("Successfully deleted")
    }
    else{
        //fs.close()
        res.end("User does not esist!")
    }
})

app.listen(3000, () => console.log('3000'))