function aggregateEl(arr) {
    let sum = 0;
    let invSum = 0;
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        invSum += 1 / arr[i];
        str += arr[i];
    }
    
    return sum + '\n' + invSum + '\n' + str;
}

console.log(aggregateEl([1, 2, 3]));