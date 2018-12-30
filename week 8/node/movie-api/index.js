const express = require('express')
const app = express()
const fs = require('fs')

app.get('/', (req, res) => {
    var data = JSON.parse(fs.readFileSync('movie-data.json'))
    res.end(JSON.stringify(data, null, 4))
})

app.listen(3000, () => {
    console.log('Listening at 3000')
})