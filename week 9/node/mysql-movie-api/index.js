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
    var movies = []
    //List of movies available with query as theatre name
    //Example:
    //http://localhost:3000/movies?theatre=PVR
    if(theatre){
        
        /*
        var byTheat = data['shows'].filter(show => show.theatre === theatre)
        data['movies'].forEach(item => {
            if (byTheat.filter(x => item.name === x.movie).length) {
                movies.push(item)
            }
        })
        */
       Shows.where('theatre', theatre)
       .fetchAll()
       .then(function(shows){
           res.json({ shows })
       })
    }
    //List of all movies available
    //Example:
    //http://localhost:3000/movies
    /*
    else {
        var data = JSON.parse(fs.readFileSync('data.json'))
        movies = data["movies"]
    }
    if(movies.length)
        res.end(JSON.stringify(movies, null, 4))
    else
        res.end("No data found")
        */
})

app.listen(3000, () => {
    console.log('Listening at 3000')
})