const arr = [10, 3, 13, 4, 5, 8, 3, 1];

function merge(arr, low, mid, high) {
    let array1 = mid - low + 1;
    let array2 = high - mid;
    let leftArr = new Array(array1);
    let rightArr = new Array(array2);
    for (let i = 0; i < array1; i++) {
        leftArr[i] = arr[low + i];
    }
    for (let i = 0; i < array2; i++) {
        rightArr[i] = arr[mid + 1 + i];
    }
    let i = 0; j = 0; k = low;
    while (i < array1 && j < array2) {
        if (leftArr[i] > rightArr[j]) {
            arr[k] = rightArr[j];
            j++;
            k++;
        }
        else {
            arr[k] = leftArr[i];
            i++;
            k++;
        }
    }
    while (i < array1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    while (j < array2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

function mergeSort(arr, low, high) {
    // base condition.
    if (low >= high) {
        return;
    }
    // calculating mid.
    let mid = Math.floor(low + (high - low) / 2);
    // dividing left array.
    mergeSort(arr, low, mid);
    // dividing right array.
    mergeSort(arr, mid + 1, high);
    // merging the entire array.
    merge(arr, low, mid, high);
}

mergeSort(arr, 0, arr.length - 1);
console.log(arr);





















// function merge(arr, left, mid, right) {
//     let a1 = mid - left + 1;
//     let a2 = right - mid;
//     let leftArr = new Array(a1);
//     let rightArr = new Array(a2);
//     for (let i = 0; i < a1; i++) {
//         leftArr[i] = arr[left + i];
//     }
//     for (let i = 0; i < a2; i++) {
//         rightArr[i] = arr[mid + 1 + i];
//     }
//     let i = 0, j = 0, k = left;
//     while (i < a1 && j < a2) {
//         if (leftArr[i] < rightArr[j]) {
//             arr[k] = leftArr[i];
//             i++;
//             k++;
//         }
//         else {
//             arr[k] = rightArr[j];
//             j++;
//             k++;
//         }
//     }
//     while (i < a1) {
//         arr[k] = leftArr[i];
//         i++;
//         k++;
//     }
//     while (j < a2) {
//         arr[k] = rightArr[j];
//         j++;
//         k++;
//     }
// }
// function mergeSort(arr, left, right) {
//     if (left >= right) {
//         return;
//     }


//     let mid = Math.floor(right - (right - left) / 2);
//     mergeSort(arr, left, mid);
//     mergeSort(arr, mid + 1, right);
//     merge(arr, left, mid, right);


// }

// mergeSort(arr, 0, arr.length - 1);
// console.log(arr);

