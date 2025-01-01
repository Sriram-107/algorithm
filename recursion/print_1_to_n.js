const print = (i, n) => {
    console.log(i);
    i++;
    if (i > n) {
        return;
    }
    print(i, n);
}

// print(1, 3);

// Time Complexity - O(n)
// Space Complexity - O(n)

// print using backtracking.
// backtracking - From last function to first function.

function printUsingBackTrack(i, n) {
    if (i < 1) {
        return;
    }
    printUsingBackTrack(i - 1, n)
    console.log(i);
}

let n = 3;
printUsingBackTrack(n, n);