const arr = [1, 1, 0, 1, 1, 1, 0, 1, 1];

function checkConsecutive(arr) {
    let prevMaxConsecutiveOnes = 0;// 0 2 3
    let maxConsecutiveOnes = 0;// 2 0 3
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            maxConsecutiveOnes += 1;
        }
        else {
            if (maxConsecutiveOnes > prevMaxConsecutiveOnes) {
                prevMaxConsecutiveOnes = maxConsecutiveOnes;
                maxConsecutiveOnes = 0;
            }
        }
    }
    return Math.max(prevMaxConsecutiveOnes, maxConsecutiveOnes);
}
console.log(
    checkConsecutive(arr)
);
// TC => O(n)