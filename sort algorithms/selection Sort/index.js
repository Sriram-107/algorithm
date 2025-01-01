const arr = [5, 1, 4, 2, 8];
function selectionSort(arr) {
    // loop through the array and consider the staring element is the minIndex.
    for (let i = 0; i <= arr.length - 2; i++) {
        let minIndex = i;
        // loop to find the minIndex.
        for (let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        // After finding the minIndex swap the elements.
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

    }
    console.log(arr);

}

selectionSort(arr);

