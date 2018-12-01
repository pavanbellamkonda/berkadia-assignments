//Prime Number Program
var n;
//Funtion to print on console
function ask(i){
    process.stdout.write('Enter the number: \n');
}
//Function to return fib series
function isPrime(n){
    if(n === 1){
        return "NOT PRIME";
    }
    if(n === 2){
        return "PRIME";
    }
    else if(n%2 === 0){
        return "NOT PRIME";
    }
    for(var i=3; i<=Math.sqrt(n); i+=2){
        if(n%i === 0){
            return "NOT PRIME";
        }
    }
    return "PRIME";
}

//Listener to handle stdin
process.stdin.on('data',function(data) {
    n = parseInt(data.toString().trim(), 10);    
    if (!isNaN(n)){
        console.log(`${n} is ${isPrime(n)}`);
        process.exit();
    }
    //to retake values if the values are not numbers
    else {
        console.log('Please enter valid value. \nEnter the number: ');
    }

});

console.log('------------------------------Prime Number Program------------------------------');
ask(0);

/*
OUTPUT:
$ node primenum.js
------------------------------Prime Number Program------------------------------
Enter the number:
23
23 is PRIME

*/
