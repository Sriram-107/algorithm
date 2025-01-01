// Binary search array needs to be sorted.
const arr = [1, 9, 15, 46, 75, 82, 90];
const target = 46;

function binarySearch(arr, target) {
    let firstIndex = 0;
    let lastIndex = arr.length - 1;

    while (firstIndex <= lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
        if (target == arr[middleIndex]) {
            return true;
        }
        else if (target < arr[middleIndex]) {
            lastIndex = middleIndex - 1;
        }
        else {
            firstIndex = middleIndex + 1;
        }
    }
    return false;
}

// console.log(binarySearch(arr, target));

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    if (arr.length == 0 || leftIndex > rightIndex) {
        return false;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target == arr[middleIndex]) {
        return true;
    }
    else if (target <= arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1);
    }
    else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }

}
console.log(recursiveBinarySearch(arr, target));
