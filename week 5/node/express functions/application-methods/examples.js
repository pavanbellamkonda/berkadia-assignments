var express = require('express')
var app = express()

//Properies of app

//app.locals
//app.locals properties persist throughout the life of the application
//can be used to store data that is used in templates
app.locals.title = 'example'
app.locals.email = 'mymail@email.com'

//app.use()
//Mounts the specified middleware function or functions 
app.use(express.json());

//app.mountpath
//The app.mountpath property contains one or more path patterns on which a sub-app was mounted.
console.log(app.mountpath)
//app2 - sub-app of app
var app2 = express()

//Event - mount
//The mount event is fired on a sub-app, 
//when it is mounted on a parent app. The parent app is passed to the callback function.
app2.on('mount', (parent) => {
    console.log('app2 mounted')
    //console.log(parent) --> logs about the parent app i.e. app
})

app2.get('/', (req, res) => {
    // /app2 is logged
    console.log(app2.mountpath)
    res.end("Hello from app2!")
})
app.use('/app2', app2)

//app.path()
//Returns the canonical path of the app, a string.
console.log(app2.path())

//app.set()
//Sets value to name. 
//Sets values to application settings properties
//Here, the strict routing property is made true using app.set()
app.set('strict routing', true)

//app.disable()
//Disables the above enabled strict routing using app.disable()
app.disable('strict routing')

//app.disabled()
//Checks if the given property is disabled.
//Returns true if disabled, false otherwise
console.log(app.disabled('strict routing'))
// => true

//app.get('property') with one argument as app property
//Gets the value of the property 'strict routing' 
console.log(app.get('strict routing'))
// => false

//app.enable()
//Enables the above disabled 'strict routing' propert of app.
app.enable('strict routing')

//app.enabled()
//Checks if the given property is enabled.
//Returns true if enabled, false otherwise
console.log(app.enabled('strict routing'))
// => true

//app,get(path, callback)
//Routes HTTP GET requests to the specified path with the specified callback functions.
app.get('/', (req, res) => {
    res.end("Hello World!")
})


//app.post()
//Routes HTTP POST requests to the specified path with the specified callback functions.
app.post('/', function(req, res){
    console.log(req.body)
    res.json(req.body)
})



//app.delete()
//The app.delete() method receives the DELETE HTTP method request to the homepage.
app.delete('/', function (req, res) {
    res.send('DELETE request to homepage');
});

//app.put()
//Routes HTTP PUT requests to the specified path with the specified callback functions.
app.put('/', (req, res) => {
    res.send('PUT request to homepage');
})

//app.route()
//Returns an instance of a single route, 
//which can be used to handle HTTP verbs with optional middleware.
app.route('/events')
.all(function(req, res, next) {
    console.log("log")
    next()
})
.get(function(req, res, next) {
  res.json({"get":"it"});
  res.end()
  next()
})
.post(function(req, res, next) {
    if(!req.body){
    console.log(req.body)
    res.json(req.body)
    }
});

//app.all()
//The app.all() method is useful for 
//mapping “global” logic for specific path prefixes or arbitrary matches.
//The following callback exexcutes for all the HTTP methods such as GEET, POST etc., and 
//for all routes other than above routes
app.all('/*', (req, res, next) => {
    res.end('all is here')
    next()
})

//app.listen()
//Binds and listens for connections on the specified host and port
app.listen(3000, () => console.log('3000'))

//Not done
//app.engine
//app.param
//app.render
//app.route