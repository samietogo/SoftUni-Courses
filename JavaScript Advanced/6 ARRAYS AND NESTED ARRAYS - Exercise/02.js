// Print Every N-th Element from an Array
function solve(arr, step) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % step === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(solve(
    [
        '5',
        '20',
        '31',
        '4',
        '20'
    ], 2));

function solve2(arr, step) {
    return arr.filter((el, i) => i % step === 0);
}

console.log(solve2(
    [
        '5',
        '20',
        '31',
        '4',
        '20'
    ], 2));