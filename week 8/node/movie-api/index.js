const express = require('express')
const app = express()
const fs = require('fs')
const BodyParser = require('body-parser');
app.use(BodyParser.json({ limit: "10mb" }));

app.get('/movies', (req, res) => {
    var data = JSON.parse(fs.readFileSync('data.json'))
    res.end(JSON.stringify(data["movies"], null, 4))
})

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

app.get('/shows', (req, res) => {
    var theatre = req.query.theatre;
    var movie = req.query.movie;
    if(theatre && movie){
        var data = JSON.parse(fs.readFileSync('data.json'));
        var shows = data['shows'].filter(show => show.theatre === theatre && show.movie === movie);
        res.end(JSON.stringify(shows, null, 4))
    }
    else if(theatre){
        var data = JSON.parse(fs.readFileSync('data.json'));
        var shows = data['shows'].filter(show => show.theatre === theatre);
        res.end(JSON.stringify(shows, null, 4))
    }
    else if(movie){
        var data = JSON.parse(fs.readFileSync('data.json'));
        var shows = data['shows'].filter(show => show.movie === movie);
        res.end(JSON.stringify(shows, null, 4))
    }
    else {
        var data = JSON.parse(fs.readFileSync('data.json'))
        res.end(JSON.stringify(data['shows'], null, 4))
    }
})

app.post('/seats', (req, res) => {
    var data = JSON.parse(fs.readFileSync('data.json'))
    var body = req.body;
    var movie = body.movie;
    var theatre = body.theatre;
    var date = body.date;
    var time = body.time;
    var show = data['shows'].find(show => show.theatre === theatre && show.movie === movie)
    var seats = show['seats'].find(seat => seat.date === date)
    var result = seats['timings'].find(r => r.time === time)
    res.end(JSON.stringify(result['tickets'], null, 4))
})

app.post('/book', (req, res) => {
    var data = JSON.parse(fs.readFileSync('data.json'))
    var body = req.body;
    var movie = body.movie;
    var theatre = body.theatre;
    var date = body.date;
    var time = body.time;
    var count = body.count;
    var show = data['shows'].find(show => show.theatre === theatre && show.movie === movie)
    var seats = show['seats'].find(seat => seat.date === date)
    var result = seats['timings'].find(r => r.time === time).tickets;
    if(count <= 6 && count >= 1){
        if(count <= result.available){
            result.available -= count;
            seats['timings'].find(r => r.time === time).tickets = result;
            show['seats'].find(seat => seat.date === date).timings = seats['timings'];
            data['shows'].find(show => show.theatre === theatre && show.movie === movie).seats = show['seats'];
            try{
            fs.writeFileSync('data.json', JSON.stringify(data, null, 4));
            res.end('Success')
            }
            catch(err) {
                res.end('Error')
            }
        }
        res.end('Error')
    }
    res.end('Error')
})

app.listen(3000, () => {
    console.log('Listening at 3000')
})