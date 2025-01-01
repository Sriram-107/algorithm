// Insertion sort is like sorting playing cards in your hands.
// You split the cards into two groups: the sorted cards and the unsorted cards.
// Then, you pick a card from the unsorted group and put it in the right place in the sorted group.

const arr = [10, 3, -6, -2, 0, 5];

function insertionSort(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) { // In best case(sorted array) the comparision will always fail. while loop won't run.
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    console.log(arr);
}


insertionSort(arr);

// Time Complexity: O(N ^ 2)
// Auxiliary Space: O(1), Temperory space
// Best case: O(n), If the list is already sorted, where n is the number of elements in the list.
// Worst case: O(n 2), If the list is in reverse order


