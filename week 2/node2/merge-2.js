//Merging Files using callbacks synchronously

var fs = require("fs")
var newFile = "";

newFile += fs.readFileSync('addition.js').toString();
newFile += fs.readFileSync('subtraction.js').toString();
newFile += fs.readFileSync('duplicate.js').toString();
newFile += fs.readFileSync('primenum.js').toString();
newFile += fs.readFileSync('merge-1.js').toString();

fs.writeFileSync('Output-2.txt', newFile);
console.log('Successfully Written to File - Output-2.txt')
