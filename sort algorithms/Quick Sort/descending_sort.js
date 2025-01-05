const arr = [4, 6, 2, 5, 7, 9, 1, 3];

function sort(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    while (i < j) {
        while (arr[i] >= pivot && i <= high - 1) {
            i++;
        }
        while (arr[j] < pivot && j > low + 1) {
            j--
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
function quickSort(arr, low, high) {
    if (low < high) {
        let partitionIndex = sort(arr, low, high);
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
    console.log(arr);

}
quickSort(arr, 0, arr.length - 1);