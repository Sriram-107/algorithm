const arr = [10, 3, 13, 4, 5, 8, 3, 1];

function merge(arr, left, mid, right) {
    let a1 = mid - left + 1;
    let a2 = right - mid;
    let leftArr = new Array(a1);
    let rightArr = new Array(a2);
    for (let i = 0; i < a1; i++) {
        leftArr[i] = arr[left + i];
    }
    for (let i = 0; i < a2; i++) {
        rightArr[i] = arr[mid + 1 + i];
    }
    let i = 0, j = 0, k = left;
    while (i < a1 && j < a2) {
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
    while (i < a1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    while (j < a2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}
function mergeSort(arr, left, right) {
    if (left >= right) {
        return;
    }


    let mid = Math.floor(right - (right - left) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);


}

mergeSort(arr, 0, arr.length - 1);
console.log(arr);

