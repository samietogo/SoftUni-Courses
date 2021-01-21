// Sorting Numbers
function solve(arr) {
    let result = [];
    let sorted = arr.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length / 2; i++) {
        result.push(sorted[i]);
        if (sorted[i] != sorted[sorted.length - 1 - i]) {
            result.push(sorted[sorted.length - 1 - i]);
        }
    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));