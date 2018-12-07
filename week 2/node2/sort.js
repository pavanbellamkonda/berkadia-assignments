//Sorting Program
var n = 0;
var nums = [];
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
        else{
            for(var a=0; a<n-1; a++){
                for(var b=a+1; b<n; b++){
                    if(nums[a] > nums[b]){
                        nums[a] = nums[a] + nums[b];
                        nums[b] = nums[a] - nums[b];
                        nums[a] = nums[a] - nums[b];
                    }
                }
            }
            console.log('Sorted array: ' + nums)
            process.exit()
        }
    }
});

console.log('------------------------------Sorting Program------------------------------');
ask(0);


/*
OUTPUT:
$ node sort.js
------------------------------Sorting Program------------------------------
Enter the length of array:
5
Enter the first element:
10
Enter the next element.
20
Enter the next element.
-9
Enter the next element.
-7
Enter the last element.
0
Sorted array: -9,-7,0,10,20

*/