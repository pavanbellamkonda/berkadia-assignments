//Min-Max Program
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
            var min, max;
            for(var a=0; a<n-1; a++){
                if(nums[a] > nums[a+1]){
                    nums[a] = nums[a] + nums[a+1];
                    nums[a+1] = nums[a] - nums[a+1];
                    nums[a] = nums[a] - nums[a+1];
                }
            }
            max = nums[n-1];
            for(var a=n-1; a>0; a--){
                if(nums[a] < nums[a-1]){
                    nums[a] = nums[a] + nums[a-1];
                    nums[a-1] = nums[a] - nums[a-1];
                    nums[a] = nums[a] - nums[a-1];
                }
            }
            min = nums[0];
            console.log('Mininmum Value: ' + min)
            console.log('Maximum Value: ' + max)
            process.exit()
        }
    }
});

console.log('------------------------------Min-Max Program------------------------------');
ask(0);

/*
OUTPUT:
$ node minmax.js
------------------------------Min-Max Program------------------------------
Enter the length of array:
5
Enter the first element:
10
Enter the next element.
20
Enter the next element.
-9
Enter the next element.
5
Enter the last element.
1
Mininmum Value: -9
Maximum Value: 20

*/
