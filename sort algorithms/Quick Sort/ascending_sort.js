const arr = [4, 6, 2, 5, 7, 9, 1, 3];
function sort(arr, low, high) {
    // get pivot
    const pivot = arr[low];
    let i = low;
    let j = high;
    // loop when low is less than high index.
    while (i < j) {
        // when element is smaller than pivot then increment i.
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }
        // when element is larger than pivot then decrese j.
        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
        // swap when i is less than j.
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
    // if(low >= high) return;
    if (low < high) {
        // get partitionIndex.
        let partitionIndex = sort(arr, low, high);
        // using partitionIndex call quickSort recursively.
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
    console.log(arr);



}
quickSort(arr, 0, arr.length - 1); 