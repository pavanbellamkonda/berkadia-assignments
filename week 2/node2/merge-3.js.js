var fs = require("fs")
var newFile = "";

function updateFile(fileName){
     return new Promise(function(resolve, reject){
        fs.readFile(fileName, 'utf8', function(err, data){
            if(err)
                reject(err);
            else{
                newFile += data;
                resolve(data)
            }
        })
    })
};

function writeFile(){
    return new Promise(function(resolve, reject){
        fs.writeFile('Output-3.txt', newFile, function(err, data){
            if (err) 
                reject(err)
            else{
                var resp = "Successfully Written to File - Output-3.txt"
                resolve(resp)
            }
        });
    })
}

updateFile('./addition.js')
  .then((data) => 
    
    updateFile('./subtraction.js')
    .then((data) => 
        updateFile('./duplicate.js')
        .then((data) => 
        
            updateFile('./merge-1.js')
            .then((data) => 
            
                updateFile('./merge-2.js')
                .then((data) => 
                
                    writeFile()
                    .then((resp) => console.log(resp))
                    .catch(error => console.log('Error: ', error))
                )
                .catch(error => console.log('Error: ', error))
            )
            .catch(error => console.log('Error: ', error))
        )
        .catch(error => console.log('Error: ', error))
    )
    .catch(error => console.log('Error: ', error))
  )
  .catch(error => console.log('Error: ', error));