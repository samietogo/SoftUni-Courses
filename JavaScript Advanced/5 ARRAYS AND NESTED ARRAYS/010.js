function diagonalSums(matrix) {
    let sumOne = 0;
    let sumTwo = 0;
    let indexOne = 0;
    let indexTwo = matrix[0].length - 1;
    for (let i = 0; i < matrix.length; i++) {
        sumOne += matrix[i][indexOne++];
        sumTwo += matrix[i][indexTwo--];
    }

    return `${sumOne} ${sumTwo}`
}

console.log(diagonalSums([[20, 40],
                          [10, 60]]));

console.log(diagonalSums([[3, 5, 17],
                          [-1, 7, 14],
                          [1, -8, 89]]));