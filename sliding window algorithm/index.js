const arr = [5, 1, 1, 4, 3, 2, 1];

const k = 3;

// Problem 1
// Max sum of contiguous sub Array. 
function sumOfSubArray(arr, k) {
    let prevSum = 0;
    for (let i = 0; i < k; i++) {
        prevSum += arr[i]
    }
    // console.log(prevSum);
    let maxSum = prevSum;

    let i = 0;
    while (k < arr.length) {
        let currSum = prevSum + arr[k] - arr[i];
        maxSum = Math.max(maxSum, currSum);
        prevSum = currSum;
        k++;
        i++;
    }
    // console.log(maxSum);

}

sumOfSubArray(arr, k);

// Min sum of contigous sub array.
function minSumOfSubArray(arr, k) {
    console.log(arr);
    console.log(k);

    let prevSum = 0;
    for (let i = 0; i < k; i++) {
        prevSum += arr[i];
    }
    let i = 0;
    let minSum = prevSum;
    while (k < arr.length) {
        let currSum = prevSum + arr[k] - arr[i];
        minSum = Math.min(prevSum, currSum);
        prevSum = currSum;
        i++;
        k++;
    }
    console.log(`minSum ${minSum}`);
    return minSum;
}
// minSumOfSubArray(arr, k);

// Problem 2
// Smallest subarray whose sum >= 8;

const z = 8;
function smallSubArray(arr, z) {
    let windowSum = 0; // store the sum
    let windowStart = 0; // 1st pointer to increment if sum is greater than 8;
    let windowSize = arr.length; // smallest subarray length;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        while (windowSum >= z) {
            windowSize = Math.min(windowSize, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart++;
        }



    }
    return windowSize;
}
// console.log(
//     smallSubArray(arr, z)
// );

// Problem 3
// Check the second string is present in the first string.
const string1 = "My name is sriram";
const string2 = "sriram";

function checkIsStringPresent(string1, string2) {
    if (string2.length > string1.length) {
        return false;
    }
    // let windowStart = 0;
    let left = 0;
    let right = 0;
    let match = 0;
    while (right < string1.length) {
        if (string1[right] === string2[match]) {
            match++;
        }
        if (match === string2.length) {
            console.log(true);

            return true;
        }
        if (right - left + 1 > string2.length) {
            if (string1[left] === string2[match - 1]) {
                match--;
            }
            left++;
        }
        right++;
    }
    return false;

}
console.log(

    checkIsStringPresent(string1, string2)
);

// problem 4 
// longest substring with k distinct characters

function longestSubstring(string1) {
    const mySet = new Set();
    let windowStart = 0;
    let windowEnd = 0;
    let windowSize = 0;
    while (windowEnd < string1.length) {
        if (!mySet.has(string1[windowEnd])) {
            mySet.add(string1[windowEnd]);
            windowSize = Math.max(windowSize, windowEnd - windowStart + 1);
            windowEnd++;
        }
        else {
            mySet.delete(string1[windowStart]);
            windowStart++;
        }
    }



    return windowSize;
}

console.log(
    longestSubstring("aaabbbbcdd")
);
