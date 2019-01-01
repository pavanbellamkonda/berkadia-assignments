const express = require('express')
const app = express()
const fs = require('fs')
const BodyParser = require('body-parser');
app.use(BodyParser.json({ limit: "10mb" }));

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

//lists all movies available
app.get('/movies', (req, res) => {
    var data = JSON.parse(fs.readFileSync('data.json'))
    res.end(JSON.stringify(data["movies"], null, 4))
})

//lists all theatres of the pincode or all the theatres
app.get('/theatres', (req, res) => {
    var pin = req.query.pin;
    var movie = req.query.movie;
    if (pin && movie) {
        var theatres = []
        var data = JSON.parse(fs.readFileSync('data.json'))
        var byPin = data['theatres'].filter(theatre => theatre.pin === parseInt(req.query.pin));
        var byMovie = data['shows'].filter(show => show.movie === req.query.movie)
        byPin.forEach(item => {
            if (byMovie.filter(x => item.name === x.theatre).length) {
                theatres.push(item)
            }
        })
        res.end(JSON.stringify(theatres, null, 4))
    }
    else if (pin) {
        var data = JSON.parse(fs.readFileSync('data.json'))
        var theatres = data['theatres'].filter(theatre => theatre.pin === parseInt(req.query.pin));
        res.end(JSON.stringify(theatres, null, 4))
    }
    else if (movie) {
        var theatres = []
        var data = JSON.parse(fs.readFileSync('data.json'))
        var byMovie = data['shows'].filter(show => show.movie === req.query.movie)
        data['theatres'].forEach(item => {
            if (byMovie.filter(x => item.name === x.theatre).length) {
                theatres.push(item)
            }
        })
        res.end(JSON.stringify(theatres, null, 4))
    }
    else {
        var data = JSON.parse(fs.readFileSync('data.json'))
        res.end(JSON.stringify(data['theatres'], null, 4))

    }
})

app.get('/movie-info', (req, res) => {
    var name = req.query.name;
    var data = JSON.parse(fs.readFileSync('data.json'));
    res.end(JSON.stringify(data['movies'].find(movie => movie.name === name), null, 4));
})

app.get('/theatre-info', (req, res) => {
    var name = req.query.name;
    var data = JSON.parse(fs.readFileSync('data.json'));
    res.end(JSON.stringify(data['theatres'].find(theatre => theatre.name === name), null, 4));
})

app.get('/movie-shows', (req, res) => {
    var movie = req.query.movie;
    var data = JSON.parse(fs.readFileSync('data.json'));
    res.end(JSON.stringify(data['shows'].filter(show => show.movie === movie), null, 4));
})

app.get('/theatre-shows', (req, res) => {
    var theatre = req.query.theatre;
    var data = JSON.parse(fs.readFileSync('data.json'));
    res.end(JSON.stringify(data['shows'].filter(show => show.theatre === theatre), null, 4));
})

app.listen(3000, () => {
    console.log('Listening at 3000')
})