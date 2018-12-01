//Fibonacci Program
var n;
//Funtion to print on console
function ask(i){
    process.stdout.write('Enter the length of Fibonacci series: \n');
}
//Function to return fib series
function fib(n){
    if (n === 1){
        return 0;
    }
    else{
        f = [0, 1];
        for(var i=2; i<n; i++){
            f[i] = f[i-1] + f[i-2];
        }
        return f;
    }
}

//Listener to handle stdin
process.stdin.on('data',function(data) {
    n = parseInt(data.toString().trim(), 10);    
    if (!isNaN(n) && n>0){
        console.log(`Fiboncci series of length ${n} is: \n${fib(n)}`);
        process.exit();
    }
    //to retake values if the values are not numbers
    else {
        console.log('Please enter valid value. \nEnter the length of Fibonacci series: ');
    }

});

console.log('------------------------------Fibonacci Program------------------------------');
ask(0);

/*
OUTPUT:
$ node fibonacci.js
------------------------------Fibonacci Program------------------------------
Enter the length of Fibonacci series:
10
Fiboncci series of length 10 is:
0,1,1,2,3,5,8,13,21,34

*/
