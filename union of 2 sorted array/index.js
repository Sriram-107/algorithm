const arr1 = [1, 1, 2, 3, 4, 5];
const arr2 = [2, 3, 4, 4, 5, 6];

function bruteUnion(arr1, arr2) {
    const set = new Set();
    // O(n1logn) - n1 - size of arr1, logn - size of set.
    for (let i = 0; i < arr1.length; i++) {
        set.add(arr1[i])
    }
    // O(n2logn) - n2 - size of arr2, logn - size of set.
    for (let j = 0; j < arr2.length; j++) {
        set.add(arr2[j]);
    }
    let result = [];
    // O(n1+n2) ==> if all elements of arr1 and arr2 are different then it fails.
    set.forEach((element) => {
        result.push(element)
    })
    console.log(result);

}
// bruteUnion(arr1, arr2);

// optimal solution - 2 pointer solution.
function optimalSol(arr1, arr2) {
    let l1 = arr1.length;
    let l2 = arr2.length;
    let i = 0;
    let j = 0;
    let result = [];
    while (i < l1 && j < l2) {
        if (arr1[i] <= arr2[j]) {
            if (result.length === 0 || arr1[i] !== result.at(-1)) {
                result.push(arr1[i]);
            }
            i++;
        } else {
            if (result.length === 0 || arr2[j] !== result.at(-1)) {
                result.push(arr2[j]);
            }
            j++;
        }
    }
    while (i < l1) {
        if (arr1[i] !== result.at(-1)) {
            result.push(arr1[i]);
        }
        i++;
    }
    while (j < l1) {
        if (arr2[j] !== result.at(-1)) {
            result.push(arr2[j]);
        }
        j++;
    }
    return result;
}

console.log(
    optimalSol(arr1, arr2)

);