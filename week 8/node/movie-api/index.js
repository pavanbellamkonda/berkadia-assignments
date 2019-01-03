const express = require('express')
const app = express()
const fs = require('fs')
const BodyParser = require('body-parser');
app.use(BodyParser.json({ limit: "10mb" }));

//End-point to retrieve list of movies available
app.get('/movies', (req, res) => {
    var theatre = req.query.theatre;
    var movies = []
    //List of movies available with query as theatre name
    //Example:
    //http://localhost:3000/movies?theatre=PVR
    if(theatre){
        var data = JSON.parse(fs.readFileSync('data.json'))
        var byTheat = data['shows'].filter(show => show.theatre === theatre)
        data['movies'].forEach(item => {
            if (byTheat.filter(x => item.name === x.movie).length) {
                movies.push(item)
            }
        })
    }
    //List of all movies available
    //Example:
    //http://localhost:3000/movies
    else {
        var data = JSON.parse(fs.readFileSync('data.json'))
        movies = data["movies"]
    }
    if(movies.length)
        res.end(JSON.stringify(movies, null, 4))
    else
        res.end("No data found")
})

//Endpoint to retrieve list of theatres
app.get('/theatres', (req, res) => {
    var pin = req.query.pin;
    var movie = req.query.movie;
    var theatres = []
    //List of theatres based on pincode and movie name
    //Example
    //http://localhost:3000/theatres?pin=500032&movie=Iron%20Man%202
    //pin = 500032 movie = Iron Man 2
    if (pin && movie) {
        
        var data = JSON.parse(fs.readFileSync('data.json'))
        var byPin = data['theatres'].filter(theatre => theatre.pin === parseInt(req.query.pin));
        var byMovie = data['shows'].filter(show => show.movie === req.query.movie)
        byPin.forEach(item => {
            if (byMovie.filter(x => item.name === x.theatre).length) {
                theatres.push(item)
            }
        })
    }
    //List of theatres based on only pincode
    //Example
    //http://localhost:3000/theatres?pin=500032
    else if (pin) {
        var data = JSON.parse(fs.readFileSync('data.json'))
        theatres = data['theatres'].filter(theatre => theatre.pin === parseInt(req.query.pin));
    }
    //List of theatres based on movie name
    //Example
    //http://localhost:3000/theatres?movie=Iron%20Man%201
    //movie = Iron Man 1
    else if (movie) {
        var data = JSON.parse(fs.readFileSync('data.json'))
        var byMovie = data['shows'].filter(show => show.movie === req.query.movie)
        data['theatres'].forEach(item => {
            if (byMovie.filter(x => item.name === x.theatre).length) {
                theatres.push(item)
            }
        })
    }
    //List of all theatres
    //Example
    //http://localhost:3000/theatres
    else {
        var data = JSON.parse(fs.readFileSync('data.json'))
        theatres = data['theatres']
    }
    if(theatres.length)
        res.end(JSON.stringify(theatres, null, 4))
    else
        res.end("No data found")
})

//Endpoint to retrieve shows information
app.get('/shows', (req, res) => {
    var theatre = req.query.theatre;
    var movie = req.query.movie;
    var shows = []
    //List of shows based on theatre name and movie name
    //Example
    //http://localhost:3000/shows?theatre=Asian&movie=Iron%20Man%203
    //theatre = Asian movie = Iron Man 3
    if(theatre && movie){
        var data = JSON.parse(fs.readFileSync('data.json'));
        var shows = data['shows'].filter(show => show.theatre === theatre && show.movie === movie);
    }
    //List of shows based on theatre name
    //Example
    //http://localhost:3000/shows?theatre=Asian
    //theatre = Asian
    else if(theatre){
        var data = JSON.parse(fs.readFileSync('data.json'));
        shows = data['shows'].filter(show => show.theatre === theatre);
    }
    //List of shows based on movie name
    //Example
    //http://localhost:3000/shows?movie=Iron%20Man%203
    // movie = Iron Man 3
    else if(movie){
        var data = JSON.parse(fs.readFileSync('data.json'));
        shows = data['shows'].filter(show => show.movie === movie);
    }
    //List of all shows
    //Example
    //http://localhost:3000/shows
    else {
        var data = JSON.parse(fs.readFileSync('data.json'))
        shows = data['shows']
    }

    if(shows.length)
        res.end(JSON.stringify(shows, null, 4))
    else
        res.end("No data found")
})

//Endpoint to retrieve seats information based on post query
app.post('/seats', (req, res) => {
    //Example:
    /*
    {
        "movie": "Captain America The Winter Soldier",
        "theatre": "INOX",
        "date":"Today",
        "time":"11:00 PM"
    }
    */
    var data = JSON.parse(fs.readFileSync('data.json'))
    var body = req.body;
    var movie = body.movie;
    var theatre = body.theatre;
    var date = body.date;
    var time = body.time;
    try {
        var show = data['shows'].find(show => show.theatre === theatre && show.movie === movie)
        var seats = show['seats'].find(seat => seat.date === date)
        var result = seats['timings'].find(r => r.time === time)
        res.end(JSON.stringify(result['tickets'], null, 4))
    }
    catch(err) {
        res.end("No data found")
    }
})

//Endpoint to book tickets
app.post('/book', (req, res) => {
    //Example:
    /*
    {
        "movie": "Iron Man 1",
        "theatre": "PVR",
        "date":"Today",
        "time":"1:00 PM",
        "count":4
    }
    */
    var data = JSON.parse(fs.readFileSync('data.json'))
    var body = req.body;
    var movie = body.movie;
    var theatre = body.theatre;
    var date = body.date;
    var time = body.time;
    var count = body.count;
    try {
        var show = data['shows'].find(show => show.theatre === theatre && show.movie === movie)
        var seats = show['seats'].find(seat => seat.date === date)
        var result = seats['timings'].find(r => r.time === time).tickets;
    }
    catch(err) {
        res.end("No data found")
    }
    if(count <= 6 && count >= 1){
        if(count <= result.available){
            result.available -= count;
            try {
                seats['timings'].find(r => r.time === time).tickets = result;
                show['seats'].find(seat => seat.date === date).timings = seats['timings'];
                data['shows'].find(show => show.theatre === theatre && show.movie === movie).seats = show['seats'];
                fs.writeFileSync('data.json', JSON.stringify(data, null, 4));
                res.end('Success')
            }
            catch(err) {
                res.end('Error')
            }
        }
        res.end('Select lesser tickets')
    }
    res.end('Tickets not in range')
})

app.listen(3000, () => {
    console.log('Listening at 3000')
})