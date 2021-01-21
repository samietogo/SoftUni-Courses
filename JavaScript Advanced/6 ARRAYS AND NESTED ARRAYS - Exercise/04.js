// Rotate Array
function solve(arr, step) {
    for (let i = 0; i < step; i++) {
        let current = arr.pop();
        arr.unshift(current);
    }
    return arr.join(' ');
}

console.log(solve(['1', '2', '3', '4'], 2));
console.log(solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15));