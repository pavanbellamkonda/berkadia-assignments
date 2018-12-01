//Merging Files using callbacks asynchronously

var fs = require("fs")
var newFile = "";

fs.readFile('addition.js', function(err, data) {
    if(err)
        return console.log(err);
    newFile += data.toString();
    fs.readFile('subtraction.js', function(err, data) {
        if(err)
            return console.log(err);
        newFile += data.toString();
        fs.readFile('duplicate.js', function(err, data) {
            if(err)
                return console.log(err);
            newFile += data.toString();
            fs.readFile('primenum.js', function(err, data) {
                if(err)
                    return console.log(err);
                newFile += data.toString();
                fs.readFile('merge-1.js', function(err, data) {
                    if(err)
                        return console.log(err);
                    newFile += data.toString();
                    fs.writeFile('Output-1.txt', newFile, function(err, data){
                        if (err) 
                            console.log(err);
                        console.log("Successfully Written to File - Output-1.txt");
                    });
                });
            });
        });
    });
});
