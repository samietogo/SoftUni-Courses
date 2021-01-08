function train(inputArr) {
    let wagonsArr = inputArr.shift(0).split(' ');
    let maxCapacity = Number(inputArr.shift(0));

    for (let i = 0; i < inputArr.length; i++) {
        let command = inputArr[i];
        let commandNum = 0;
        let commandCount = command.split(' ').length;
        if (commandCount == 1) {
            commandNum = Number(command);
            for (let a = 0; a < wagonsArr.length; a++) {
                let current = Number(wagonsArr[a]);
                if (current + commandNum <= maxCapacity) {
                    let sum = current + commandNum;
                    wagonsArr.splice(a, 1, sum);
                    break;
                }
            }
        } else {
            commandNum = command.split(' ').pop();
            wagonsArr.push(commandNum);
        }
    }
    console.log(wagonsArr.join(' '));
}

// train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);

function train2(inputArr) {
    let wagonsArr = inputArr.shift().split(' ').map(Number);
    let maxCapacity = Number(inputArr.shift());

    for (let command of inputArr) {
        let commandNum = 0;
        if (command.includes('Add')) {
            commandNum = Number(command.split(' ')[1]);
            wagonsArr.push(commandNum);
        } else {
            commandNum = Number(command);
            for (let i = 0; i < wagonsArr.length; i++) {
                let current = Number(wagonsArr[i]);
                if (current + commandNum <= maxCapacity) {
                    wagonsArr[i] += commandNum;
                    break;
                }
            }
        }
    }
    console.log(wagonsArr.join(' '));
}

// train2(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);

function distinctArr(inputArr) {
    let newArr = inputArr.filter((a, b) => inputArr.indexOf(a) === b);
    console.log(newArr.join(' '));
}

// distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);

function distinctArr2(inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
        let index = inputArr.indexOf(inputArr[i], i + 1);
        if (index !== -1) {
            inputArr.splice(index, 1);
        }
    }
    return inputArr.join(' ');
}

// console.log(distinctArr2([7, 8, 9, 7, 2, 3, 4, 1, 2]));

function houseParty(inputArr) {
    let list = [];
    for (let command of inputArr) {
        let name = command.split(' ')[0];
        if (command.includes('not')) {
            if (list.includes(name)) {
                let remove = list.indexOf(name);
                list.splice(remove, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name);
            }
        }
    }
    console.log(list.join('\n'));
}

// houseParty(['Tom is going!',
// 'Annie is going!',
// 'Tom is going!',
// 'Garry is going!',
// 'Jerry is going!']);

function sorting(inputArr) {
    let sortedArr = inputArr.sort((a, b) => b - a);
    let result = [];
    for (let i = 0; i < sortedArr.length / 2; i++) {
        let first = sortedArr[i];
        let second = sortedArr[sortedArr.length - (i + 1)];
        if (first == second) {
            result.push(first);
        } else {
            result.push(first);
            result.push(second);
        }
    }
    console.log(result.join(' '));
}

// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

function sortArrByTwoCriteria(inputArr) {
    let result = inputArr.sort(function (a, b) {
        return a.length - b.length || a.localeCompare(b);
    });
    console.log(result.join('\n'));
}

// sortArrByTwoCriteria(["alpha", "beta", "aeta", "gamma"]);

function bombNumber(sequence, bomb) {
    let bombNum = bomb[0];
    let bombPower = bomb[1];
    let newArr = sequence.slice();
    let result = 0;
    let a = 0;
    while (a < newArr.length) {
        let start = a - bombPower;
        if (start < 0) {
            start = 0;
        }
        if (newArr[a] == bombNum) {
            newArr.splice(start, (bombPower * 2) + 1);
            a = 0;
        } else {
            a++;
        }
    }
    for (let j of newArr) {
        result += j;
    }
    console.log(result);
}

// bombNumber([2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);

function searchForNumber(sequence, commands) {
    let arr = sequence.splice(0, commands[0]);
    arr.splice(0, commands[1]);
    let count = 0;
    for (element of arr) {
        if (element == commands[2]) {
            count++;
        }
    }
    console.log(`Number ${commands[2]} occurs ${count} times.`);
}

// searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);

function arrayManipulator(sequence, commands) {
    let index = 0;
    let element = 0;
    let i = 0;
    let command = commands[i];
    let commandName = command.split(' ')[0];
    while (commandName != 'print') {
        let arr = [];
        index = Number(command.split(' ')[1]);
        if (commandName == 'add') {
            element = Number(command.split(' ')[2]);
            sequence.splice(index, 0, element);
        } else if (commandName == 'addMany') {
            arr = command.split(' ');
            arr.shift();
            let start = Number(arr.shift());
            for (let i = arr.length - 1; i >= 0; i--) {
                sequence.splice(start, 0, Number(arr[i]));
            }
        } else if (commandName == 'contains') {
            let isFind = false;
            for (let i = 0; i < sequence.length; i++) {
                if (sequence[i] == index) {
                    isFind = true;
                    console.log(i);
                    break;
                }
            }
            if (!isFind) {
                console.log(-1);
            }
        } else if (commandName == 'remove') {
            sequence.splice(index, 1);
        } else if (commandName == 'shift') {
            for (let i = 0; i < index; i++) {
                let current = sequence.shift();
                sequence.push(current);
            }
        } else if (commandName == 'sumPairs') {
            for (let i = 0; i < sequence.length; i += 2) {
                let first = sequence[i];
                let second = sequence[i + 1];
                if (second == undefined) {
                    second = 0;
                }
                arr.push(first + second);
            }
            sequence = arr;
        }

        i++;
        command = commands[i];
        commandName = command.split(' ')[0];
    }
    console.log('[ ' + sequence.join(', ') + ' ]');
}

// arrayManipulator([2, 2, 4, 2, 4, 5], ["add 1 4", "sumPairs", "print"]);

function gladiatorInventory(inputArr) {
    let inventory = inputArr.shift().split(' ');
    for (let i = 0; i < inputArr.length; i++) {
        let command = inputArr[i].split(' ')[0];
        if (command == 'Buy') {
            let equipment = inputArr[i].split(' ')[1];
            let includes = inventory.includes(equipment);
            if (!includes) {
                inventory.push(equipment);
            }
        } else if (command == 'Trash') {
            let equipment = inputArr[i].split(' ')[1];
            let includes = inventory.includes(equipment);
            if (includes) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
            }
        } else if (command == 'Repair') {
            let equipment = inputArr[i].split(' ')[1];
            let includes = inventory.includes(equipment);
            if (includes) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
                inventory.push(equipment);
            }
        } else {
            let equipment = inputArr[i].split(' ')[1];
            let equ = equipment.split('-')[0];
            let upgrade = equipment.split('-')[1];
            let includes = inventory.includes(equ);
            if (includes) {
                let index = inventory.indexOf(equ);
                inventory.splice(index + 1, 0, equ + ':' + upgrade);
            }
        }
    }
    console.log(inventory.join(' '));
}

// gladiatorInventory(['SWORD Shield Spear',
// 'Buy Bag',
// 'Trash Shield',
// 'Repair Spear',
// 'Upgrade SWORD-Steel']);

function wall(inputArr) {
    let result = [];
    let money = 0;
    while (true) {
        let concrete = 0;
        for (let i = 0; i < inputArr.length; i++) {
            let currentSection = inputArr[i];
            if (currentSection != 30) {
                inputArr.splice(i, 1, currentSection + 1);
                concrete += 195;
                money += 195 * 1900;
            }
        }
        if (concrete == 0) {
            break;
        }
        result.push(concrete);
    }
    console.log(result.join(', '));
    console.log(`${money} pesos`);
}

// wall([21, 25, 28]);