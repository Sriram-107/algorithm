let arr = [1, 2, 4, 7, 7, 7, 5];

// brute force - sort and find second largest element.
function merge(arr, low, mid, high) {
    // console.log(low);
    let leftArrayLength = mid - low + 1;
    let rightArrayLength = high - mid;
    let leftArr = new Array(leftArrayLength);
    let rightArr = new Array(rightArrayLength);
    for (let i = 0; i < leftArrayLength; i++) {
        leftArr[i] = arr[low + i];
    }
    for (let j = 0; j < rightArrayLength; j++) {
        rightArr[j] = arr[mid + j + 1];
    }
    let i = 0;
    let j = 0;
    let k = low;
    while (i < leftArrayLength && j < rightArrayLength) {
        if (leftArr[i] < rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
            k++;
        }
        else {
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }
    while (i < leftArrayLength) {
        arr[k] = leftArr[i];
        i++;
        k++
    }
    while (j < rightArrayLength) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}
function mergeSort(arr, low, high) {
    if (low >= high) return;
    let mid = Math.floor(low + (high - low) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}

// mergeSort(arr, 0, arr.length - 1);

let largest = arr[arr.length - 1];
for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < largest) {
        // console.log(arr[i]);
        break;
    }
}

// Better solution - Find largest and with that find second Largest.
function findLargest(arr) {
    let large = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large) {
            large = arr[i];
        }
    }
    return large;
}
// let large = findLargest(arr);
// console.log(large);
let secondLarge = -1;
for (let i = 0; i < arr.length; i++) {
    // if (arr[i] > secondLarge && arr[i] < large) {
    secondLarge = arr[i];
}
// }
// console.log(secondLarge);

// optimized solution
// second largest
function optimisedSol(arr) {
    let large = arr[0];
    let secondLarge = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large) {
            secondLarge = large;
            large = arr[i];
        } else if (arr[i] < large && arr[i] > secondLarge) {
            secondLarge = arr[i];
        }
    }
    console.log(secondLarge);

}
optimisedSol(arr);

// second smallest.

function secondSmallest(arr) {
    let smallest = arr[0];
    let secondSmallest = Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] > smallest && arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    }
    console.log(secondSmallest);

}

secondSmallest(arr)