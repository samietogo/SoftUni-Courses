// Last K Numbers Sequence
function solve(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let start = Math.max(0, i - k);
        for (let j = start; j < i; j++) {
            sum += arr[j];
        }
        arr.push(sum);
    }
    return arr;
}

console.log(solve(6, 3));
console.log(solve(8, 2));