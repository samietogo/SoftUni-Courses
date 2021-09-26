function printNElement(arr, step) {
    let result = [];
    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }

    return result;
}

console.log(printNElement(['5', '20', '31', '4', '20'], 2));
console.log(printNElement(['dsa','asd', 'test', 'tset'], 2));
console.log(printNElement(['1', '2','3', '4', '5'], 6));