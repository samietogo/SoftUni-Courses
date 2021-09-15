function largestNum(a, b, c) {
    let arr = [a, b, c];
    let result = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return `The largest number is ${result}.`;
}

console.log(largestNum(5, -3, 16))