function movingTarget(inputArr) {
    let targets = inputArr.shift().split(' ').map(Number);
    let i = 0;
    let task = inputArr[i];
    while (task != 'End') {
        let [command, index, num] = task.split(' ');
        index = Number(index);
        num = Number(num);
        if (command == 'Shoot') {
            if (index >= 0 && index < targets.length) {
                targets[index] -= num;
            }
            if (targets[index] <= 0) {
                targets.splice(index, 1);
            }
        } else if (command == 'Add') {
            if (index >= 0 && index < targets.length) {
                targets.splice(index, 0, num);
            } else {
                console.log(`Invalid placement!`);
            }
        } else {
            if (index - num >= 0 && index + num < targets.length) {
                targets.splice(index - num, num * 2 + 1);
            } else {
                console.log('Strike missed!');
            }
        }
        i++;
        task = inputArr[i];
    }
    console.log(targets.join('|'));
}

// movingTarget([
//     '52 74 23 44 96 110',
//     'Shoot 5 10',
//     'Shoot 1 80',
//     'Strike 2 1',
//     'Add 22 3',
//     'End']);

movingTarget([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End']);