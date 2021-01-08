function solve(arr) {
    let key = arr.shift();
    let i = 0;
    let line = arr[i];
    while (line != 'Generate') {
        let command = line.split('>>>')[0];
        if (command == 'Contains') {
            let str = line.split('>>>')[1];
            if (key.includes(str)) {
                console.log(`${key} contains ${str}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (command == 'Flip') {
            let [a, kase, start, end] = line.split('>>>');
            start = Number(start);
            end = Number(end);
            let current = key.substr(start, end - start);
            if (kase == 'Upper') {
                let sliced = key.replace(current, current.toUpperCase());
                key = sliced;
            } else {
                let sliced = key.replace(current, current.toLowerCase());
                key = sliced;
            }
            console.log(key);
        } else {
            let [a, start, end] = line.split('>>>');
            start = Number(start);
            end = Number(end);
            let current = key.substr(start, end - start);
            let sliced = key.replace(current, '');
            key = sliced;
            console.log(key);
        }
        i++;
        line = arr[i];
    }
    console.log(`Your activation key is: ${key}`);
}

solve(['abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]);