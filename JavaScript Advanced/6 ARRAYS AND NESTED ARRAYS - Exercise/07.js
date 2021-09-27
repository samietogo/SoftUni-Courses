function sortingNumbers(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let result = [];
    while (sorted.length != 0) {
        let currentStart = sorted.shift();
        result.push(currentStart);
        let currentEnd = sorted.pop();
        result.push(currentEnd);
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));