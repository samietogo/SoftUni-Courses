function magicMatrices(matrix) {
    let sumRow = matrix.map((col => col.reduce((a,b) => a + b)));
    let sumCol = matrix.reduce((z, a) => z.map((b, y) => a[y] + b));
    let equal = array => array.every( x => x === array[0]);

    return equal(sumRow) && equal(sumRow) && sumRow.toString() === sumCol.toString();
}

console.log(magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
console.log(magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));
console.log(magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));