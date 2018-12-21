var express = require('express');
var app = express();

//express.json()
//Used to parse incoming requests into JavaScript Objects
app.use(express.json());

//express.static()
//Used to serve static files
//Serves files at
app.use('/static', express.static(__dirname + 'static'))

app.post('/', function(req, res){
    console.log(req.body)
    res.json(req.body)
})

app.listen(3000, () => console.log('3000'))