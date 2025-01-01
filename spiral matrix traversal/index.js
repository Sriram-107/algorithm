const arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]];
function spiralMatrixTraversal(arr) {
    let top = 0;
    let bottom = arr.length - 1;
    let right = arr[0].length - 1;
    let left = 0;
    let direction = 0;
    while (top <= bottom && left <= right) {
        if (direction == 0) {
            for (let i = left; i <= right; i++) {
                console.log(arr[top][i]);


            }
            top++;

        }
        else if (direction == 1) {
            for (let i = top; i <= bottom; i++) {
                console.log(arr[i][right]);

            }
            right--;

        }
        else if (direction == 2) {
            for (let i = right; i >= left; i--) {
                console.log(arr[bottom][i]);

            }
            bottom--;

        }
        else {
            for (let i = bottom; i >= top; i--) {
                console.log(arr[i][left]);

            }
            left++;

        }

        direction = (direction + 1) % 4;
    }
}

spiralMatrixTraversal(arr)