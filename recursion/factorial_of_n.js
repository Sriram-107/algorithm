// parameterized approach
function FibPar(n, result) {
    if (n <= 1) {
        console.log(result);
        return;
    }
    FibPar(n - 1, result * n);
}

// FibPar(3, 1);

// Functional Approach
function FibFun(n) {
    if (n == 1) {
        return 1;
    }
    return n * FibFun(n - 1);
}
console.log(
    FibFun(3));

// TimeComplexity - O(n)
// SpaceComplexity - O(n)