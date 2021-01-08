function test(str, num) {
    return `${str} is ${num} years old.`;
}

// let string = test('Sami', 41);
// console.log(string);

function isValid(arr, index) {
    if (index < 0 || index >= arr.length) {
        return false;
    } else {
        return true;
    }
}

// let myArr = [0, -5, 98, 6, 15, 21];
// console.log(isValid(myArr, 5));

function printStars(arg) {
    console.log("*".repeat(arg));
}

// printStars(10);

function repeatString(str, n) {
    console.log(str.repeat(n));
}

// repeatString("String", 2);

function formatGrades(grade) {
    if (grade < 3) {
        console.log('Fail (2)');
    } else if (grade < 3.5) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.5) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.5) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}

// formatGrades(3.33);

function mathPower(num, power) {
    console.log(Math.pow(num, power));
}

// mathPower(2, 8);

function mathPowerTest(num, power) {
    let result = num;
    for (let i = 1; i < power; i++) {
        result *= num;
    }
    console.log(result);
}

// mathPowerTest(3, 4);

function mathPowerTestTwo(num, power) {
    let result = num ** power;
    console.log(result);
}

// mathPowerTestTwo(2, 8);

function orders(product, n) {
    let price = 0;
    if (product == 'water') {
        price = 1;
    } else if (product == 'coffee') {
        price = 1.5;
    } else if (product == 'coke') {
        price = 1.4;
    } else {
        price = 2;
    }
    console.log((price * n).toFixed(2));
}

// orders('water', 5);

function simpleCalc(a, b, operator) {
    switch (operator) {
        case 'multiply':
            let multiply = (a, b) => a * b;
            console.log(multiply(a, b));
            break;
        case 'divide':
            let divide = (a, b) => a / b;
            console.log(divide(a, b));
            break;
        case 'add':
            let add = (a, b) => a + b;
            console.log(add(a, b));
            break;
        case 'subtract':
            let subtract = (a, b) => a - b;
            console.log(subtract(a, b));
    }
}

// simpleCalc(5, 5, 'multiply');

function simpleCalcTwo(a, b, operator) {
    const operations = {
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y,
        add: (x, y) => x + y,
        subtract: (x, y) => x - y
    };

    console.log(operations[operator](a, b));
}

// simpleCalc(5, 5, 'multiply');

function signCheck(numOne, numTwo, numThree) {
    let sum = numOne * numTwo * numThree;
    if (sum < 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}

// signCheck(5, 12, -15);

function printCertificate(grade, namesArr) {

    if(pass(grade)) {
        printHeader();
        console.log(getName(namesArr));
        formatGrade(grade);
    } else {
        console.log(getName(namesArr) + ' does not qualify');
    }

    function pass(grade) {
        return grade >= 3;
    }

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }

    function getName(nameArr) {
        return nameArr[0] + " " + nameArr[1];
    }

    function formatGrade(grade) {
        let result = '';
        if (grade < 3) {
            result = 'Fail (2)';
        } else if (grade < 3.5) {
            result = `Poor (${grade.toFixed(2)})`;
        } else if (grade < 4.5) {
            result = `Good (${grade.toFixed(2)})`;
        } else if (grade < 5.5) {
            result = `Very good (${grade.toFixed(2)})`;
        } else {
            result = `Excellent (${grade.toFixed(2)})`;
        }
        console.log(result)
    }
}

// printCertificate(5.30, ['John', 'Smith']);