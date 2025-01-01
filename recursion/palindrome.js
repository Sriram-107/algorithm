let str = "malayalam";
let n = str.length;
function palindrome(i) {
    if (i >= n / 2) {
        return true;
    }
    if (str[i] !== str[n - i - 1]) {
        return false;
    }
    return palindrome(i + 1);
}

// console.log(
//     palindrome(0)
// );

function twoPointerPal(l, r) {
    if (l >= r) {
        return true;
    }
    if (str[l] === str[r]) {
        l++;
        r--;
        return twoPointerPal(l, r);
    }
    else {
        return false;
    }
}

console.log(
    twoPointerPal(0, str.length - 1)
);
