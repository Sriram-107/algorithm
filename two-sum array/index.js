const arr = [10, 2, 33, 1, 11, 7, 9];
const target = 16
// Brute force method - If target present true else false (or) If target present return indexes;
function bruteTwoSum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                // return true;
                return [i, j];
            }
        }
    }
    return false;
}
// console.log(
//     bruteTwoSum(arr, target)
// );
// Better solution - HashMap - Store all the elements in hash = [element, index] = [key, value]
// target - element1 = element2; approach.
function betterTwoSum(arr, target) {
    let map = new Map(); // 
    for (let i = 0; i < arr.length; i++) {
        let elementToFind = target - arr[i];
        if (!map.has(arr[i])) {
            map.set(arr[i], i);
        }
        if (map.has(elementToFind)) {
            return map.get(elementToFind);
        }
    }

}
console.log(

    betterTwoSum(arr, target)
) 