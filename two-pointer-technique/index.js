// Two Sum - Given sorted array find target == sum of 2 elments in the array. If present return true.
function isSumPresent(arr, target) {
    let pointer1 = 0;
    let pointer2 = arr.length - 1;
    while (pointer1 < pointer2) {
        let sum = arr[pointer1] + arr[pointer2]
        if (target == sum) {
            return true;
        }
        else if (sum < target) {
            pointer1++;
        }
        else {
            pointer2--;
        }

    }
    return false;
}
const arr = [1, 2, 3, 4, 5];
const target = 8;

console.log(isSumPresent(arr, target)
);

// Check given string is palindrome or not
let data = "madam";
function checkPalindrome(name) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if (name[i] !== name[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
console.log(checkPalindrome(data));

