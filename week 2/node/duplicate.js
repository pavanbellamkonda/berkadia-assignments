//Duplicates Program
var n = 0;
var nums = [];
var dups = [];
var ndups = [];
//Funtions to print on console
function ask(i){
    process.stdout.write('Enter the length of array: \n');
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
        nums.push(parseInt(data.toString().trim(), 10));
        if (nums.length < n) {
            askarr(nums.length);
        }
        else {
            for(var i=0; i<nums.length; i++){
                if(ndups.includes(nums[i]) && !dups.includes(nums[i])){
                    dups.push(nums[i])
                }
                else{
                    ndups.push(nums[i])
                }
            }
            if(dups.length === 0){
                console.log('\nNo Dupicate Elements!')
            }
            else if(dups.length === 1){
                console.log(`${dups[0]} is the duplicate element.`)
            }
            else {
                console.log(`${dups} are the duplicate elements.`)
            }    
            process.exit()
        }
    }
});

console.log('------------------------------Duplicates Program------------------------------');
ask(0);

/*
OUTPUT:
$ node duplicate.js
------------------------------Duplicates Program------------------------------
Enter the length of array:
6
Enter the first element:
10
Enter the next element.
20
Enter the next element.
10
Enter the next element.
20
Enter the next element.
30
Enter the last element.
10
10,20 are the duplicate elements.

*/