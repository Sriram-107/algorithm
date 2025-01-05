let arr = [3, 2, 1, 5, 2];

// brute force solution - sort ascending, last element largest element.
function quickSort(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }
        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    arr[low] = arr[j];
    arr[j] = pivot;
    return j;
}
function quickSortAndFind(arr, low, high) {
    if (low < high) {
        let partitionIndex = quickSort(arr, low, high);
        quickSortAndFind(arr, low, partitionIndex - 1);
        quickSortAndFind(arr, partitionIndex + 1, high)
    }
    console.log(arr[arr.length - 1]);
}
quickSortAndFind(arr, 0, arr.length - 1);

// optimal solution - keep 1 element max and loop through.
function optimalSol(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    console.log(max);

}
optimalSol(arr);