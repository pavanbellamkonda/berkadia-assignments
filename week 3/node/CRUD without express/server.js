const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    var url = req.url;
    if(url === '/'){
        var html = fs.readFileSync('index.html', 'utf8');
        res.end(html)
    }
    else if(url === '/retrieve'){
        let data = fs.readFileSync('data.json', 'utf8');
        let json = JSON.parse(data);
        console.log(JSON.stringify(json, null, 4))
        res.end(JSON.stringify(json, null, 4))
    }
    else if(url === '/create'){
        collectRequestData(req, result => {
            let pres = JSON.parse(result)
            let data = fs.readFileSync('data.json', 'utf8');
            let json = JSON.parse(data);
            for(var key in pres){
                if (key in json)
                    res.end("User(s) already exists!")
                else
                    json[key] = pres[key]
            }
            fs.writeFileSync('data.json', JSON.stringify(json, null, 4), 'utf8')
            console.log(JSON.stringify(json, null, 4))
            res.end(JSON.stringify(json, null, 4))
        });
    }
    else if(url === '/update'){
        collectRequestData(req, result => {
            let pres = JSON.parse(result)
            let data = fs.readFileSync('data.json', 'utf8');
            let json = JSON.parse(data);
            for(var key in pres){
                if (key in json)
                    json[key] = pres[key]
                else
                    res.end("User(s) does not exist!")
            }
            fs.writeFileSync('data.json', JSON.stringify(json, null, 4), 'utf8')
            console.log(JSON.stringify(json, null, 4))
            res.end(JSON.stringify(json, null, 4))
        });
    }
    else if(url === '/delete'){
        collectRequestData(req, result => {
            let pres = JSON.parse(result)
            let data = fs.readFileSync('data.json', 'utf8');
            let json = JSON.parse(data);
            for(var key in pres){
                if (key in json)
                    delete json[key]
                else
                    res.end("User(s) does not exist!")
            }
            fs.writeFileSync('data.json', JSON.stringify(json, null, 4), 'utf8')
            console.log(JSON.stringify(json, null, 4))
            res.end(JSON.stringify(json, null, 4))
        });
    }
    else{
        res.end("<p>Wrong page! Go <a href=" + `"http://localhost:3000/"` +">Home!</a></p>")
    }
    

});

function collectRequestData(request, callback) {
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        callback(body);
    });
}

console.log("Server listening at http://localhost:3000")
server.listen(3000)
