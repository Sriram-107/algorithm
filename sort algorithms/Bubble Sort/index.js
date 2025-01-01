// const arr = [2, -4, 5, 1, 0, -6]; // 6 elements 5 comparision
const arr = [1, 2, 3, 4, 5]; // best case - TC => O(n);
function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let swap = false;
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap = true;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            console.log(swap);

        }
        if (swap === false) {
            break;
        }
    }
    console.log(arr);

}
bubbleSort(arr);


// function bubbleSort(arr) {
//     for (let i = 0; i <= arr.length - 2; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     console.log(arr);

// }

// // bubbleSort(arr);

// function swapBubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) { // number of runs - 6 elements - runs 5 times
//         let swap = false;
//         for (let j = 0; j < arr.length - i - 1; j++) { // comparision of adjacent elements and moving the greatest element to right and if swap happens then true.
//             console.log(arr);
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 console.log(arr);
//                 swap = true;
//             }
//         }
//         if (swap == false) {
//             // console.log(arr);
//             break;
//         }
//     }
// }
// swapBubbleSort(arr);

