//Addition Program
//Queries to be printed on console
var quer = ['First value: \n', 'Second value: \n'];
//Array to store values taken from console
var nums = [];
//Funtion to print 
function ask(i){
    process.stdout.write(`Enter ${quer[i]}`);
}

function add(a, b){
    return a + b;
}

//Listener to handle stdin
process.stdin.on('data',function(data) {
    nums.push(parseInt(data.toString().trim(), 10));
    if (nums.length < quer.length) {
        ask(nums.length);
    } else {
        //calculate and print the calculated value
        if (!isNaN(nums[0]) && !isNaN(nums[1])){
            res = add(nums[0], nums[1]);
            console.log('Added value: ' + res);
            process.exit();
        }
        //to retake values if the values are not numbers
        else {
            console.log('Please enter valid values. \nEnter First value:');
            nums = [];
        }
    }
});

console.log('------------------------------Addition Program------------------------------');
ask(0);

/* 
OUTPUT:
$ node addition.js
------------------------------Addition Program------------------------------
Enter First value:
10
Enter Second value:
20
Added value: 30

*/