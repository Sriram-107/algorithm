const arr = [2, 4, 14, 65, 79, 9];
const target = 19;
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

console.log(linearSearch(arr, target));
