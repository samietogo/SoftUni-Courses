// Smallest Two Numbers
function solve(arr) {
    let result = [];
    while(result.length != 2) {
        let currentIndex = arr.indexOf(Math.min(...arr));
        let currentMin = arr.splice(currentIndex, 1);
        result.push(currentMin);
    }
    return result.join(" ");
}

console.log(solve([30, 15, 50, 5]));
console.log(solve([3, 0, 10, 4, 7, 3]));