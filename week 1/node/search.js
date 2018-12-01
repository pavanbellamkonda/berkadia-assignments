//Search Program
var n = 0;
var nums = [];
var f = 0;
var k;
var ind = [];
//Funtions to print on console
function ask(i){
    if(i === 0){
        process.stdout.write('Enter the length of array: \n');
    }
    else {
        process.stdout.write('Enter the value to be searched: \n');
    }
}
function askarr(i){
    if(i === 0){
        console.log('Enter the first element: ')
    }
    else if( i === n-1){
        console.log('Enter the last element. ')
    }
    else{
        console.log('Enter the next element. ')
    }
}

//Listener to handle stdin
process.stdin.on('data',function(data) {
    if(n === 0){
        n = parseInt(data.toString().trim(), 10);
        askarr(0);
    }
    else{
        if (nums.length < n) {
            nums.push(parseInt(data.toString().trim(), 10));
            if (nums.length < n){
                askarr(nums.length);
            }
            else {
                ask(2);
            }
        }
        else {
            k = parseInt(data.toString().trim(), 10);
            for(var i=0; i<nums.length; i++){
                if(k == nums[i]){
                    ind.push(i)
                }
            }
            if(ind.length == 0){
                console.log(`\n${k} is not in the given array!`)
            }
            else if(ind.length == 1){
                console.log(`\n${k} is found at the index: ${ind[0]}`)
            }
            else{
                console.log(`\n${k} is found at indices: ${ind}`)
            }
            process.exit()
        }
    }
});

console.log('------------------------------Search Program------------------------------');
ask(0);

/*
OUTPUT:
$ node search.js
------------------------------Search Program------------------------------
Enter the length of array:
5
Enter the first element:
10
Enter the next element.
20
Enter the next element.
30
Enter the next element.
10
Enter the last element.
20
Enter the value to be searched:
10

10 is found at indices: 0,3

*/