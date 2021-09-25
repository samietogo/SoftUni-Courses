function smallestTwoNumbers(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let [x, y, ...el] = sorted;
    const result = [x, y];
    return result.join(' ');
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));