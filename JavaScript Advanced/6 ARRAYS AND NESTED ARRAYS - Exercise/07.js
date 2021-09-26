function sortingNumbers(arr) {
    let sorted = arr.sort((a, b) => a - b);

    return sorted;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));