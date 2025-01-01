
function printName(i, n) {
    if (i > n) {
        return;
    }
    console.log("Sriram");
    i++

    printName(i, n);
}

// const n = 5;
printName(1, 5)

// Time Complexity - O(n);
// Space Complexity - O(n) ; In stack we are adding the function n times.