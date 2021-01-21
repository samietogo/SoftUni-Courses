// List of Names
function solve(arr) {
    let result = [];
    let sorted = arr.sort((a, b) => a.localeCompare(b));
    for (let i = 1; i <= sorted.length; i++) {
        result.push(i + "." + sorted[i - 1]);
    }
    return result.join('\n');
}

// console.log(solve(["John", "Bob", "Christina", "Ema"]));

function solve2(arr) {
    let sorted = arr
    .sort((a, b) => a.localeCompare(b))
    .map((name, index) => {
        let result = `${index + 1}.${name}`
        return result;
    });
    return sorted.join('\n');
}

console.log(solve2(["John", "Bob", "Christina", "Ema"]));