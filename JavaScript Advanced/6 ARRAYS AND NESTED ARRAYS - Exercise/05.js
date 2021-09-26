function extractIncrSubFromArray(arr) {
    let result = [arr[0]];
    let current = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1] && current <= arr[i]) {
            current = arr[i];
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(extractIncrSubFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncrSubFromArray([1, 2, 3, 4]));
console.log(extractIncrSubFromArray([20, 3, 2, 15, 6, 1]));

// function extractIncrSubFromArray(arr) {
//     let result = [arr[0]];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i + 1] >= result[result.length - 1] && arr[i + 1] != undefined) {
//             result.push(arr[i + 1]);
//         }
//     }

//     return result;
// }

// console.log(extractIncrSubFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// console.log(extractIncrSubFromArray([1, 2, 3, 4]));
// console.log(extractIncrSubFromArray([20, 3, 2, 15, 6, 1]));

// function extractIncrSubFromArray(arr) {
//     return arr.reduce(function (result, currentValue) {
//         if (currentValue >= result[result.length - 1] || result.length === 0) {
//             result.push(currentValue);
//         }
//         return result;
//     }, []);
// }

// console.log(extractIncrSubFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// console.log(extractIncrSubFromArray([1, 2, 3, 4]));
// console.log(extractIncrSubFromArray([20, 3, 2, 15, 6, 1]));