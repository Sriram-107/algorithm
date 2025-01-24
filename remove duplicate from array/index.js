const arr = [1, 1, 2, 2, 2, 3, 3];

// Brute force approach - Set()
function bruteForce(arr) {
    // create set
    const set = new Set();
    // loop array and add elements to set
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
    }
    // console.log(set);
    // index to access array.
    let index = 0;
    // loop through set and replace elements in array
    for (let element of set) {
        // console.log(element);
        arr[index] = element;
        index++
    }
    arr.splice(index, arr.length - index);
    console.log(arr);
}
// bruteForce(arr);

// optimal solution - two pointer.

function twoPointer(arr) {
    let left = 0;
    let right = 1;
    while (right < arr.length) {
        if (arr[left] === arr[right]) {
            right++;
        }
        else {
            left++;
            arr[left] = arr[right];
            right++
        }
    }
    // duplicates removed
    arr.splice(left + 1, arr.length - left + 1);
    console.log(arr);
    // 3 elements changed
    // console.log(left + 1);
}
twoPointer(arr);