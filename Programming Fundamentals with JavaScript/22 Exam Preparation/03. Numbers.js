function numbers(str) {
    let arr = str.split(' ').map(Number);
    let averageValue = 0;
    let newArr = [];
    for (let line of arr) {
        averageValue += line;
    }
    averageValue /= arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > averageValue) {
            newArr.push(arr[i]);
        }
    }
    if (newArr.length == 0) {
        console.log(`No`);
    } else {
        newArr.sort((a, b) => b - a).splice(5);
        console.log(newArr.join(' '));
    }
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');