const arr = [10, 3, 13, 4, 5, 8, 3, 1];

function merge(arr, left, mid, right) {
    // Length of the array.
    let n1 = mid - left + 1;
    let n2 = right - mid;
    // create new array
    const L = new Array(n1);
    const R = new Array(n2);

    // assigning partitioned array elements to new array.
    for (let i = 0; i < n1; i++) {
        L[i] = arr[left + i]
    }

    for (let i = 0; i < n1; i++) {
        R[i] = arr[mid + 1 + i]
    }

    // assigining smaller elements to the  
    let i = 0; j = 0; k = left;
    while (i < n1 && j < n2) {
        if (L[i] < R[j]) {
            arr[k] = L[i];
            i++;
            k++;
        }
        else {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
    // sort remaining elements in left array
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    // sort remaining elements in right array
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
function mergeSort(arr, left, right) {
    if (left >= right) {
        return;
    }
    // Binary partitian - split the array & find the middle.
    let mid = Math.floor(left + (right - left) / 2);

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

mergeSort(arr, 0, arr.length - 1);
console.log(arr);

// O(nlogn) - logn is for partitioning the array recursively. n is for merging the array back


// [5, 1, 3, 12, 4, 6];
//  0, 1, 2, 3,  4, 5;
//  left = 0;
//  right = 5;
//  mid = 2; 3;