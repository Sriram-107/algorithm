const print = (n) => {
    console.log(n);
    n--;
    if (n == 0) {
        return;
    }
    print(n);
}

// print(3);

// print using backtracking.
// backtracking - From last function to first function.

function printUsingBackTrack(i, n) {
    if (i > n) {
        return;
    }
    printUsingBackTrack(i + 1, n)
    console.log(i);
}

printUsingBackTrack(1, 3)