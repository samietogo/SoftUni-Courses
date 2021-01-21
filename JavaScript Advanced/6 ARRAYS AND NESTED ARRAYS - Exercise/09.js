// Magic Matrices
function solve(matrix) {
    let rowSums = [];
    let colSums = [];
    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        rowSums.push(arr.reduce((a, b) => a + b));
    }
    for (let i = 0; i < matrix.length; i++) {
        let currentSum = [];
        for(let j = 0; j < matrix[i].length; j++) {
            
        }
    }
    return rowSums;
}

console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
// function solve(matrix) {
//     let result = 0;
//     for (let i = 0; i < matrix.length - 1; i++) {
//         let first = matrix[i];
//         let second = matrix[i + 1];
//         result += compareVertical(first, second);
//     }
//     for (let j = 0; j < matrix.length; j++) {
//         let arr = matrix[j];
//         result += compareHorizontal(arr);
//     }
//     function compareVertical(a, b) {
//         let sum = 0;
//         for (let i = 0; i < a.length; i++) {
//             if (a[i] == b[i]) {
//                 sum += 1;
//             }
//         }
//         return sum;
//     }
//     function compareHorizontal(a) {
//         let sum = 0;
//         for (let i = 0; i < a.length; i++) {
//             if (a[i] == a[i + 1]) {
//                 sum += 1;
//             }
//         }
//         return sum;
//     }
//     return result;
// }

// function Matrices(arr) {

//     let sumRow = arr.map((col => col.reduce((a,b) => a + b)));

//     let sumCol = arr.reduce((z, a) => z.map((b, y) => a[y] + b));

//     let equal = array => array.every( x => x === array[0]);

//     return equal(sumRow) && equal(sumRow) && sumRow.toString() === sumCol.toString();

// }