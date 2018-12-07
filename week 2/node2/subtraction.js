//Subtraction Program
//Queries to be printed on console
var quer = ['First value: \n', 'Second value: \n'];
//Array to store values taken from console
var nums = [];
//Funtion to print 
function ask(i){
    process.stdout.write(`Enter ${quer[i]}`);
}

//Listener to handle stdin
process.stdin.on('data',function(data) {
    nums.push(parseInt(data.toString().trim(), 10));
    if (nums.length < quer.length) {
        ask(nums.length);
    } else {
        //calculate and print the calculated value
        if (!isNaN(nums[0]) && !isNaN(nums[1])){
            res = nums[0] - nums[1];
            console.log('Subtracted value: ' + res);
            process.exit();
        }
        //to retake values if the values are not numbers
        else {
            console.log('Please enter valid values. \nEnter First value:');
            nums = [];
        }
    }
});

console.log('------------------------------Subtraction Program------------------------------');
ask(0);

/*
OUTPUT:
$ node subtraction.js
------------------------------Subtraction Program------------------------------
Enter First value:
10
Enter Second value:
20
Subtracted value: -10

*/
