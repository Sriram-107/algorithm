function problem1(arr, n) {
    const map = new Map();
    for (let element of arr) {
        if (!map.has(element)) {
            map.set(element, 1)
        }
        else {
            map.set(element, map.get(element) + 1);
        }
    }
    console.log(map);

    map.has(n) ? console.log(map.get(n)) : console.log("Element not present");
}
problem1([1, 2, 1, 3, 2], 1);