function addOrSubstract(arr) {
    let sumOriginal = 0;
    let sumModified = 0;
    let currentNum = 0;
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        currentNum = arr[i];
        sumOriginal += currentNum;
        if(currentNum % 2 == 0) {
            currentNum += i;
        } else {
            currentNum -= i;
        }
        sumModified += currentNum;
        newArr.push(currentNum);
    }
    console.log(newArr);
    console.log(sumOriginal);
    console.log(sumModified);

}

// addOrSubstract([-5, 11, 3, 0, 2]);

function commonElements(arr1, arr2) {
    let compareOme = 0;
    let compareTwo = 0;

    for(let i = 0; i < arr1.length; i++) {
        compareOme = arr1[i];
        for(let j = 0; j < arr2.length; j++) {
            compareTwo = arr2[j];
            if(compareOme === compareTwo) {
                console.log(compareTwo);
            }
        }
    }

}

// commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']);

function mergeArr(arr1, arr2) {
    let newArr = [];

    for(let i = 0; i < arr1.length; i++) {
        if(i % 2 == 0) {
            let sum = Number(arr1[i]) + Number(arr2[i]);
            newArr.push(sum);
        } else {
            newArr.push(arr1[i] + arr2[i]);
        }
    }
    console.log(newArr.join(' - '));
}

// mergeArr(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11']);

function arrRotation(arr, n) {

    for(let i = 0; i < n; i++) {
        let current = arr.shift();
        arr.push(current);
    }
    console.log(arr.join(' '));
}

// arrRotation([51, 47, 32, 61, 21], 2);

function maxNumber(arr) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        let isBigger = true;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] <= arr[j]) {
                isBigger = false;
                break;
            }
        }
        if(isBigger) {
            result.push(arr[i]);
        }
    }
    console.log(result.join(' '));
}

// maxNumber([14, 24, 3, 19, 15, 17]);

function equalSums(arr) {
    let isEqual = false;
    for(let i = 0; i < arr.length; i++) {
        isEqual = false;
        let sumRight = 0;
        let sumLeft = 0;
        for(let j = i + 1; j < arr.length; j++) {
            sumRight += arr[j];
        }
        for(let e = i - 1; e >= 0; e--) {
            sumLeft += arr[e];
        }
        if(sumLeft == sumRight) {
            console.log(i);
            isEqual = true;
            break;
        }
    }
    if(isEqual == false) {
        console.log(`no`);
    }
}

// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

function maxSequence(arr) {
    let sequence = [];
    for(let i = 0; i < arr.length; i++) {
        let current = [arr[i]];
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] == arr[j]) {
                current.push(arr[j]);
            } else {
                break;
            }
        }
        if(sequence.length < current.length) {
            sequence = current;
        }
    }
    console.log(sequence.join(' '));
}

// maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

function magicSum(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] == num) {
                console.log(arr[i], arr[j]);
            }
        }
    }
}

// magicSum([1, 2, 3, 4, 5, 6], 6);

function dungeonestDark(arr) {
    arr = arr.toString().split('|');
    let health = 100;
    let coins = 0;
    let sequenceArr = [];
    let roomCount = 0;
    let healedPotion = 0;
    let currentHealth = 0;

    for(let i = 0; i < arr.length; i++) {
        let currentRoom = arr[i].split(' ');
        let currentItem = currentRoom[0];
        let currentNum = currentRoom[1];
        sequenceArr.push(currentItem, currentNum);
    }
    for(let i = 0; i < sequenceArr.length; i += 2) {
        let currentItem = sequenceArr[i];
        let currentNum = Number(sequenceArr[i + 1]);
        if(currentItem == 'potion') {
            healedPotion = currentNum;
            currentHealth = health;
            health += currentNum;
            if(health >= 100) {
                healedPotion = 100 - currentHealth;
                health = 100;
            }
            console.log(`You healed for ${healedPotion} hp.`);
            console.log(`Current health: ${health} hp.`);
            roomCount += 1;
        } else if(currentItem == 'chest') {
            coins += currentNum;
            console.log(`You found ${currentNum} coins.`);
            roomCount += 1;
        } else {
            health -= currentNum;
            if(health <= 0) {
                roomCount += 1;
                console.log(`You died! Killed by ${currentItem}.`);
                console.log(`Best room: ${roomCount}`);
                break;
            } else {
                console.log(`You slayed ${currentItem}.`);
                roomCount += 1;
            }
        }
    }

    if(roomCount == arr.length) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

// dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");

function ladybugs(arr) {
 
    let fieldSize = arr.shift();
    let bugsPosition = arr.shift().split(' ');
    let command;
 
    let bugGrid = createBugsGrid(fieldSize, bugsPosition);
 
    for (order of arr) {
        command = order.split(' ');
        switch (command[1]) {
            case 'right':
                moveRight(Number(command[0]), Number(command[2]));
                break;
            case 'left':
                moveLeft(Number(command[0]), Number(command[2]));
                break;
        }
    }
 
    console.log(bugGrid.join(' '));
 
    function createBugsGrid(fieldSize, bugsPosition) {
        let grid = [];
        for (i = 0; i < fieldSize; i++) {
            grid.push(0);
        }
        for (element of bugsPosition) {
            if (Number(element) >= 0 && Number(element) < fieldSize) {
                grid[Number(element)] = 1;
            }
        }
        return grid;
    }
    function moveRight(startingPosition, distance) {
        if (bugGrid[startingPosition] === 1) {
            bugGrid[startingPosition] = 0;
 
            for (let index = startingPosition + distance; index < fieldSize; index += distance) {
                if (bugGrid[index] === 0) {
                    bugGrid[index] = 1;
                    break;
                }
            }
        }
    }
    function moveLeft(startingPosition, distance) {
        if (bugGrid[startingPosition] === 1) {
            bugGrid[startingPosition] = 0;
 
            for (let index = startingPosition - distance; index >= 0; index -= distance) {
                if (bugGrid[index] === 0) {
                    bugGrid[index] = 1;
                    break;
                }
            }
        }
    }
}

// ladybugs([ 3, '0 1','0 right 1','2 right 1' ]);

function printElement(arr) {
    let n = Number(arr.pop());
    let result = [];
    for(let i = 0; i < arr.length; i += n) {
        result.push(arr[i]);
    }
    console.log(result.join(' '));
}

// printElement(['5', '20', '31', '4', '20', '2']);

function addRemove(arr) {
    let result = [];
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if(command == 'add') {
            counter++;
            result.push(counter);
        } else if(command == 'remove') {
            result.pop();
            counter++;
        }
    }
    if(result.length == 0) {
        console.log('Empty')
    } else {
        console.log(result.join(' '));
    }
}

// addRemove(['add', 'add', 'remove', 'add', 'add']);

function arrayRotate(arr) {
    let n = arr.pop();
    for(let i = 0; i < n; i++) {
        let current = arr.pop();
        arr.unshift(current);
    }
    console.log(arr.join(' '));
}

// arrayRotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

function nonDecreasingSubsequence(arr) {
    let result = [];
    let current = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] >= current) {
            current = arr[i];
            result.push(arr[i]);
        }
    }
    console.log(result.join(' '));
}

// nonDecreasingSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);

function tseamAcc(arr) {
    let start = arr.shift().toString().split(' ');
    let i = 0;
    let command = arr[i];
    let commArr = [];
    let isInstalled = true;
    while(command != 'Play!') {
        let currentSequence = arr[i].toString().split(' ');
        let comm = currentSequence[0];
        let game = currentSequence[1];
        commArr.push(comm, game);
        i++;
        command = arr[i];
    }
    for(let j = 0; j < commArr.length; j += 2) {
        let comm = commArr[j];
        let game = commArr[j + 1];
        if(comm == 'Install') {
            for(let a = j + 2; a < commArr.length; a++) {
                let check = commArr[a];
                if(check != game) {
                    isInstalled = false;
                }
            }
            if(isInstalled == false) {
                start.push(game);
            }
        } else if(comm == 'Uninstall') {
            start.splice(j - 1, 1);
        } else if(comm == 'Update') {
            
        }
        console.log(comm, game);
    }
    console.log(start);
    console.log(commArr.join(' -> '));
}

tseamAcc(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 1);
// console.log(arr);