const express = require('express');
const app = express();
const BodyParser = require('body-parser');
app.use(BodyParser.json({ limit: "10mb" }));
var Movies = require('./models/movie-model');
var Shows = require('./models/shows-model');
var Theat = require('./models/theatre-model');

//End-point to retrieve list of movies available
app.get('/movies', (req, res) => {
    var theatre = req.query.theatre;
    //List of movies available with query as theatre name
    //Example:
    //http://localhost:3000/movies?theatre=PVR
    if(theatre){
       Shows.where('theatre', theatre)
       .fetchAll()
       .then(function(shows){
           let movies = new Set()
           for(let show of shows.models) {
               movies.add(show.attributes.movie)
           }
           res.json(Array.from(movies))
       })
    }
    //List of all movies available
    //Example:
    //http://localhost:3000/movies
    else {
        Movies.fetchAll()
        .then(function(movies) {
            var m = []
            for(let movie of movies.models) {
                m.push(movie.attributes.name)
            }
            res.json(m)
        })
    }
})

//Endpoint to retrieve list of theatres
app.get('/theatres', (req, res) => {
    var pin = req.query.pin;
    var movie = req.query.movie;
    //List of theatres based on only pincode
    //Example
    //http://localhost:3000/theatres?pin=500032
    if (pin) {
        Theat.where('pin', pin)
        .fetchAll()
        .then(function(theats) {
            let theatres = []
            for(let theat of theats.models) {
                theatres.push(theat.attributes.name)
            }
            res.json(theatres)
        })
    }
    //List of theatres based on movie name
    //Example
    //http://localhost:3000/theatres?movie=Iron%20Man%201
    //movie = Iron Man 1
    else if (movie) {
        Shows.where('movie', movie)
       .fetchAll()
       .then(function(shows){
           let theatres = new Set()
           for(let show of shows.models) {
               theatres.add(show.attributes.theatre)
           }
           res.json(Array.from(theatres))
       })
    }
    //List of all theatres
    //Example
    //http://localhost:3000/theatres
    else {
        Theat.fetchAll()
        .then(function(theats) {
            var theatres = []
            for(let theat of theats.models) {
                theatres.push(theat.attributes.name)
            }
            res.json(theatres)
        })
    }
})

app.get('/shows', (req, res) => {
    var theatre = req.query.theatre;
    var movie = req.query.movie;
    //List of shows based on theatre name and movie name
    //Example
    //http://localhost:3000/shows?theatre=Asian&movie=Iron%20Man%203
    //theatre = Asian movie = Iron Man 3
    if(theatre && movie){
        Shows.where({"theatre" : theatre, "movie": movie})
       .fetchAll()
       .then(function(shows){
           let s = []
           for(let show of shows.models) {
               s.push(show.attributes)
           }
           res.json(s)
       })
    }
    //List of shows based on theatre name
    //Example
    //http://localhost:3000/shows?theatre=Asian
    //theatre = Asian
    else if(theatre){
        Shows.where({"theatre" : theatre})
       .fetchAll()
       .then(function(shows){
           let s = []
           for(let show of shows.models) {
               s.push(show.attributes)
           }
           res.json(s)
       })
    }
    //List of shows based on movie name
    //Example
    //http://localhost:3000/shows?movie=Iron%20Man%203
    // movie = Iron Man 3
    else if(movie){
        Shows.where({"movie": movie})
       .fetchAll()
       .then(function(shows){
        let s = []
        for(let show of shows.models) {
            s.push(show.attributes)
        }
        res.json(s)
       })
    }
    //List of all shows
    //Example
    //http://localhost:3000/shows
    else {
        Shows
       .fetchAll()
       .then(function(shows){
            let s = []
            for(let show of shows.models) {
                s.push(show.attributes)
            }
            res.json(s)
       })
    }
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
    var body = req.body;
    var movie = body.movie;
    var theatre = body.theatre;
    var date = body.date;
    var time = body.time;
    var total, available;
    try {
        Shows.where({"theatre" : theatre, "movie": movie, "date": date,"time": time})
        .fetch({columns:['tickets_total','tickets_available']})
        .then(function(show){
            total = show.get('tickets_total');
            available = show.get('tickets_available');
            res.json({"tickets_total": total ,"tickets_available": available})
        })
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
    var body = req.body;
    var movie = body.movie;
    var theatre = body.theatre;
    var date = body.date;
    var time = body.time;
    var count = body.count;
    var total, available;
    
    Shows.where({"theatre" : theatre, "movie": movie, "date": date,"time": time})
    .fetch()
    .then(function(show){
        total = show.get('tickets_total');
        available = show.get('tickets_available');
        if(count <= 6 && count >= 1){
            if(count <= available){
                available -= count;
                show.save({
                    "movie": movie,
                    "theatre": theatre,
                    "date":date,
                    "time":time,
                    "tickets_total": total,
                    "tickets_available": available
                })
                res.end('Success')
            }
            res.end('Select lesser tickets')
        }
        res.end('Tickets not in range')
    })
})

app.listen(3000, () => {
    console.log('Listening at 3000')
})