// Given an array find missing number

const arr = [1, 2, 3, 5]; // 4 is missing
const n = 5;
// Brute Force => TC => O(n*n) & SC => O(1)
function bruteForce(arr, n) {
    for (let i = 1; i <= n; i++) {
        let present = "false";
        for (let j = 0; j < arr.length; j++) {
            if (i === arr[j]) {
                present = true;
                break;
            }
        }
        if (!present) {
            return i;

        }
    }
}
// console.log(bruteForce(arr, n));

// Better Solution => Hashing Array.
// TC => O(2n), SC => O(n)
function betterSolution(arr, n) {
    const result = new Array(n + 1).fill(0);
    console.log(result);
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = 1;
    }
    console.log(result);

    for (let i = 1; i < result.length; i++) {
        if (result[i] == 0) {
            console.log(i);
        }
    }

}
// betterSolution(arr, n);

// Best solution 
// Add from 1 to n and subtract from the sum of given array.
// Sum of n natural numbers = n*(n+1)/2
function bestSolution(arr, n) {
    let total = 0;
    let arrayTotal = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    for (let i = 0; i < arr.length; i++) {
        arrayTotal += arr[i];
    }
    console.log(total - arrayTotal);
}
// bestSolution(arr, n);


// XOR => same number xor is zero
// 1 ^ 1 => 0
// 2 ^ 2 => 0
// xor1 = 1^2^3^4^5;
// xor2 = 1^2^4^5;
// xor1 ^ xor2 

function xorSolution(arr, n) {
    let xor1 = 0;
    let xor2 = 0;
    for (let i = 0; i < n - 1; i++) {
        xor2 = xor2 ^ arr[i];
        xor1 = xor1 ^ (i + 1);
    }
    xor1 = xor1 ^ n;

    console.log(xor1 ^ xor2);

}
xorSolution(arr, n);