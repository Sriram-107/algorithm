// parameterized approach
function sumNumbers(n, sum) {
    if (n < 1) {
        console.log(sum);
        return;
    }
    sumNumbers(n - 1, sum + n);

}
// sumNumbers(4, 0);

// functional approach
function sumFunNum(n) {
    if (n == 0) {
        return 0;
    }
    return n + sumFunNum(n - 1);
}

console.log(
    sumFunNum(4)
);

// TimeComplexity - O(n)
// SpaceComplexity - O(n)
