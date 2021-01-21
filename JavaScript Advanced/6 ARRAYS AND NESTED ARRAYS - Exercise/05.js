// Extract Increasing Subsequence from Array
function solve(arr) {
    let result = [arr[0]];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] >= result[result.length - 1] && arr[i + 1] != undefined) {
            result.push(arr[i + 1]);
        }
    }
    return result;
}

// console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));

function solve2(arr) {
    return arr.reduce(function (result, currentValue, index, initialArrray) {
        if (currentValue >= result[result.length - 1] || result.length === 0) {
            result.push(currentValue);
        }
        return result;
    }, []);
}

console.log(solve2([1, 3, 8, 4, 10, 12, 3, 2, 24]));