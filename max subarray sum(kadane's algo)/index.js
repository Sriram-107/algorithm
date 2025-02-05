// Brute force  => TC => O(n3)
function maxSubArraySum(arr, n){
    let max = -Infinity;
    for(let i = 0;i<n; i++){
        for(let j = i; j < n; j++ ){
            let sum = 0
            for(let k =i; k<=j; k++){
                sum += arr[k];
                max = Math.max(max,sum);
            }
        }
    }
    console.log(max);
    
}
const arr = [-2,-3,4,-1,-2,1,5,-3];
// ans = 7
maxSubArraySum(arr,arr.length);

// Better solution => TC => O(n2)
function maxSubArraySumBetter(arr, n){
    let max = -Infinity;
    for(let i = 0; i<n; i++){
        let sum = 0;
        for(let j = i; j<n; j++){
            sum+=arr[j];
            max = Math.max(sum, max);
        }
    }
    console.log(max);
}
maxSubArraySumBetter(arr, arr.length);

// Best/Optimised solution => Kadane's algorithm => O(n)
// max = -Infinity, sum = 0;
// 1st loop through array compare sum with max. If sum<0 replace with 0.
// Additional question => print subarray start and end.
function maxSubArraySumBest(arr, n){
    let max = -Infinity;
    let sum = 0;
    let end;
    let start;
    for(let i = 0; i<n; i++){
        if(sum == 0){
            start = i;
        }
        sum+=arr[i];
        if(sum > max){
            max = sum;
            end = i;
        }
        if(max<0){
            console.log(start , end);
            
            sum = 0;
        }
    }
    console.log(start , end);
    if(max < 0){
        return -1;
    }
    console.log(max);
    
}
maxSubArraySumBest(arr, arr.length);