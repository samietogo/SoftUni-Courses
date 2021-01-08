function arrModifier(inputArr) {
    let arr = inputArr.shift().split(' ').map(Number);
    let i = 0;
    let command = inputArr[i];
    while (command != 'end') {
        let [currentCommand, a, b] = command.split(' ');//[23 -2 321 87 42 90 -123]
        if (currentCommand == 'swap') {
            let c = arr[a];
            arr[a] = arr[b];
            arr[b] = c;
        } else if (currentCommand == 'multiply') {
            let c = arr[a] * arr[b];
            arr.splice(a, 1, c);
        } else {
            let newArr = arr.map((x) => x - 1);
            arr = newArr;
        }
        i++;
        command = inputArr[i];
    }
    console.log(arr.join(', '));
}

arrModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);