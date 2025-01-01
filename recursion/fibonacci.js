// parameterized approach.
function fibPar(n, result) {
    if (n < 1) {
        return result;
    }
    result = result * n;
    return fibPar(n - 1, result)
}

// console.log(
//     fibPar(4, 1)
// );

// Functional approach. 
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(
    fibonacci(4)
);