//Factorial Program
//Array to store values taken from console
var n;
//Funtion to print on console
function ask(i){
    process.stdout.write('Enter the number: \n');
}
//Function to return fib series
function fact(n){
    if(n === 0 || n === 1){
        return 1;
    }
    res = 2;
    for(var i=3; i<=n; i++){
        res *= i;
    }
    return res;
}

//Listener to handle stdin
process.stdin.on('data',function(data) {
    n = parseInt(data.toString().trim(), 10);    
    if (!isNaN(n) && n >= 0){
        console.log(`Factorial of ${n} is ${fact(n)}`);
        process.exit();
    }
    //to retake values if the values are not numbers
    else {
        console.log('Please enter valid value. \nEnter the number: ');
    }

});

console.log('------------------------------Factorial Program------------------------------');
ask(0);

/* 
OUTPUT:
$ node factorial.js
------------------------------Factorial Program------------------------------
Enter the number:
10
Factorial of 10 is 3628800

*/