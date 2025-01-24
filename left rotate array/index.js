let arr = [1, 2, 3, 4, 5];

function leftRotateByOnePlace(arr) {
    let element = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = element;
    console.log(arr);

}
leftRotateByOnePlace(arr);

// rotating brute force.
function leftRotate(arr, place) {
    if (place > arr.length) {
        place = place % arr.length;
    }
    while (place !== 0) {

        let element = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1]
        }
        arr[arr.length - 1] = element;
        place--;
    }
    console.log(arr);

}
// leftRotate(arr, 6);

// optimal solution.
function rotateArray(arr, n, times) {
    times = times % n;
    arr.reverse()
}
// times - 3 times rotation or 4 times rotation.
// rotateArray(arr, arr.length, 3)