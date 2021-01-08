function sumFirstLast(arr) {
    let first = Number(arr[0]);
    let last = Number(arr.pop());
    return first + last;
}

// console.log(sumFirstLast(['20', '30', '40']));

function negativePositiveNumbers(arr) {
    let newArr = [];
    let result = '';
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if(current < 0) {
            newArr.unshift(current);
        } else {
            newArr.push(current);
        }
    }

    for(let j = 0; j < newArr.length; j++) {
        result += newArr[j] + '\n';
    }
    return result;
}

// console.log(negativePositiveNumbers([7, -2, 8, 9]));

function kNumbers(arr) {
    let k = arr.shift();
    let first = arr.slice(0, k);
    let second = arr.slice(- k);
    
    console.log(first.join(' '));
    console.log(second.join(' '));
}

// kNumbers([3, 6, 7, 8, 9]);

function lastKNumberSequence(n, k) {
    let result = [1];
    for(let i = 1; i < n; i++) {
        let lastK = result.slice(-k);
        let sum = 0;
        for(let num of lastK) {
            sum += num;
        }
        result.push(sum);
    }
    console.log(result.join(' '));
}

// lastKNumberSequence(6, 3);

function printOddNums(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 != 0) {
            newArr.push(arr[i]);
        }
    }
    let result = newArr.map(a => a * 2);
    console.log(result.reverse().join(' '));
}

// printOddNums([10, 15, 20, 25]);

function printOddNums2(arr) {
    let filtered = arr.filter((v, i) => (i % 2) == 1);
    let doubled = filtered.map(a => a * 2);
    let reversed = doubled.reverse();

    console.log(reversed.join(' '));
    
}

// printOddNums2([3, 0, 10, 4, 7, 3]);

function smallestTwoNums(arr) {
    let asc = arr.sort((a, b) => a - b);
    asc = asc.slice(0, 2);
    console.log(asc.join(' '));
}

// smallestTwoNums([3, 0, 10, 4, 7, 3]);

function listOfProducts(arr) {
    // let asc = arr.sort();
    let asc = arr.sort((a, b) => a.localeCompare(b));
    for(let i = 0; i < asc.length; i++) {
        console.log(`${i + 1}.${asc[i]}`);
    }
}

// listOfProducts(["Potatoes", "Tomatoes", "Onions", "apples"]);

function arrayManipulation(inputArr) {
    let arr = inputArr.shift().split(' ');
    for(let i = 0; i < inputArr.length; i++) {
        let commandArr = inputArr[i].split(' ');
        let command = commandArr[0];
        let commandNumOne = Number(commandArr[1]);
        let commandNumTwo = Number(commandArr[2]);
        if(command == 'Add') {
            arr.push(commandNumOne);
        } else if(command == 'Remove') {
            let current = arr.filter(a => a != commandNumOne);
            arr = current;
        } else if(command == 'RemoveAt') {
            arr.splice(commandNumOne, 1);
        } else {
            arr.splice(commandNumTwo, 0, commandNumOne);
        }
    }
    console.log(arr.join(' '));
}

// arrayManipulation(['4 19 2 53 6 43',
// 'Add 3',
// 'Remove 2',
// 'RemoveAt 1',
// 'Insert 8 3']
// );