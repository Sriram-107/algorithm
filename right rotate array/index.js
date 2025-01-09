// Brute force solution
arr = [1, 2, 3, 4, 5];
function bruteRotate(arr, n, place) {
    if (place > n) {
        place = place % n;
    }
    while (place !== 0) {
        let element = arr[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            arr[i + 1] = arr[i];
        }
        arr[0] = element;
        place--;
    }
    console.log(arr);

}
// bruteRotate(arr, arr.length, 2);

// optimal reverse
function optimalRightRotate(arr, n, times) {
    if (times > n) {
        times = times % n;
    }
    reverse(arr, 0, n - 1);
    reverse(arr, 0, times - 1);
    reverse(arr, times, n - 1);
    return arr;
}
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
let result = optimalRightRotate(arr, arr.length, 2);
console.log(result);
