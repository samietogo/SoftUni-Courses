// Equal Neighbors
function solve(matrix) {
    let result = 0;
    for (let i = 0; i < matrix.length - 1; i++) {
        let first = matrix[i];
        let second = matrix[i + 1];
        result += compareVertical(first, second);
    }
    for (let j = 0; j < matrix.length; j++) {
        let arr = matrix[j];
        result += compareHorizontal(arr);
    }
    function compareVertical(a, b) {
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] == b[i]) {
                sum += 1;
            }
        }
        return sum;
    }
    function compareHorizontal(a) {
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] == a[i + 1]) {
                sum += 1;
            }
        }
        return sum;
    }
    return result;
}

console.log(solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));
console.log(solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));
console.log(solve([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]));