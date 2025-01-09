// const arr = [1, 0, 2, 3, 0, 0, 10, 5, 1, 0, 8, 1];
const arr = [1, 2, 3, 4, 5, 6];
// Brute force solution;
function bruteForce(arr, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            result.push(arr[i]);
        }
    }
    for (let i = result.length; i < n; i++) {
        result.push(0);
    }
    console.log(result);

}
// bruteForce(arr, arr.length)
// TC - O(n) + O(n-x) => O(2n)
// SC - Extra space = O(n)

// optimal solution
function optimalSol(arr, n) {
    let i = -1;
    let j;
    for (let a = 0; a < n; a++) {
        if (arr[a] === 0) {
            i = a;
            j = i + 1;
            break;
        }
    }
    if (i === -1) {
        console.log(arr);
        return;
    }
    while (j < n) {
        if (arr[j] !== 0) {
            arr[i] = arr[j];
            arr[j] = 0;
            i++;
            j++;
        }
        else {
            j++;
        }
    }
    console.log(arr);

}
optimalSol(arr, arr.length);