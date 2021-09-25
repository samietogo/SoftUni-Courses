function negativePositiveNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.unshift(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }

    return result.join('\n');
}

console.log(negativePositiveNumbers([7, -2, 8, 9]));
console.log(negativePositiveNumbers([3, -2, 0, -1]));