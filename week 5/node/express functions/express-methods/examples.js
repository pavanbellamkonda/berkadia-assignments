var express = require('express');
var app = express();

//express.json()
//Used to support JSON-encoded bodies
app.use(express.json());

//express.urlencoded
//Used to support URL-encoded bodies
app.use(express.urlencoded());

//express.static()
//Used to serve static files
//Serves files at /static route with file name appended
//example: http://localhost:3000/static/image.png
//example: http://localhost:3000/static/examples.js
app.use('/static', express.static(__dirname + '/static'))


//express.Router()
//Creates a Router object
//Responds when /route is invoked
var router = express.Router()
app.use('/route', router)
router.get('/', (req, res) => {
    res.end("Hello from router!")
})

//Works for both JSON and URL encoded requests
app.post('/', function(req, res){
    console.log(req.body)
    res.json(req.body)
})

app.listen(3000, () => console.log('3000'))