let arr = [2, 5, 9, 22, 6];
let matrix = [
    [4, 6, 3, 0],
    [2, 1, -2],
    [-5, 17],
    [7, 3, 9, 12]
];


let sum = arr.reduce((acc, c) => acc + c);
let average = arr.reduce((acc, c, i, a) => acc + c / a.length, 0);
let max = arr.reduce((acc, c) => Math.max(acc, c));
let max2 = arr.reduce((acc, c) => acc > c ? acc : c);

let result = matrix.reduce(matrixReducer);

function matrixReducer(acc, c) {
    return acc.concat(c);
}

console.log(sum);
console.log(average);
console.log(max);
console.log(max2);

console.log(result);