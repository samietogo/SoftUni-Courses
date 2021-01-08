function smallestNum(num1, num2, num3) {
    const arr = [num1, num2, num3];
    let result = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (current < result) {
            result = current;
        }
    }

    console.log(result);
}

// smallestNum(600, 342, 123);

function smallestNumTwo(a, b, c) {
    let smallest = Number.MAX_SAFE_INTEGER;

    smallest = smaller(a, smallest);
    smallest = smaller(b, smallest);
    smallest = smaller(c, smallest);

    function smaller(x, y) {
        if (x < y) {
            y = x;
        }
        return y;
    }

    return smallest;
}

// console.log(smallestNumTwo(600, 342, 123));

function smallestNumThree(a, b, c) {

    let smallest = (a, b, c) => { if (a < b && a < c) return a; else if (b < c) return b; else return c; }

    return smallest(a, b, c);
}

// console.log(smallestNumThree(600, 342, 123));

function smallestNumFour(a, b, c) {

    console.log(Math.min(a, b, c));
}

// console.log(smallestNumThree(600, 342, 123));

function addAndSubtract(num1, num2, num3) {

    let theSum = sum(num1, num2);
    let result = subtract(theSum, num3);

    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    return result;
}

// console.log(addAndSubtract(42, 58, 100));

function charInRange(a, b) {
    let first = a.charCodeAt(0);
    let last = b.charCodeAt(0);
    let start = first < last ? first : last;
    let end = first > last ? first : last;
    let result = '';

    for (let i = start + 1; i < end; i++) {
        let current = String.fromCharCode(i);
        result += current + ' ';
    }

    return result;
}

// console.log(charInRange('C', '#'));

function oddAndEvenSum(a) {
    let stringNum = a.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < stringNum.length; i++) {
        let current = stringNum.charAt(i);
        Number(current) % 2 != 0 ? oddSum += Number(current) : evenSum += Number(current);
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

}

// console.log(oddAndEvenSum(1000435));

function palindromeInt(arr) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i].toString();
        let isPallindrome = 'true';
        let count = 1;

        for (let j = 0; j < Math.floor(currentNum.length / 2); j++) {
            let currentDigit = currentNum[j];
            let mirrorDigit = currentNum[currentNum.length - count];
            if (currentDigit != mirrorDigit) {
                isPallindrome = 'false';
                break;
            }
            count++;
        }
        result += isPallindrome + '\n';
    }
    return result;
}

// console.log(palindromeInt([123, 323, 421, 121, 3223322]));

function passValidator(str) {

    if (!isValidLength(str)) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isValidChars(str)) {
        console.log('Password must consist only of letters and digits');
    }
    if (!isValidDigits(str)) {
        console.log('Password must have at least 2 digits');
    }
    if (isValidLength(str) && isValidChars(str) && isValidDigits(str)) {
        console.log('Password is valid');
    }


    function isValidLength(a) {
        if (a.length >= 6 && a.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function isValidChars(a) {
        let currentChar;
        let isValid = true;
        for (let i = 0; i < a.length; i++) {
            currentChar = a.charCodeAt(i);
            if ((currentChar >= 97 && currentChar <= 122) || (currentChar >= 65 && currentChar <= 90) || (currentChar >= 48 && currentChar <= 57)) {
                isValid = true;
            } else {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            return true;
        } else {
            return false;
        }
    }

    function isValidDigits(a) {
        let currentChar;
        let digitsCount = 0;
        for (let i = 0; i < a.length; i++) {
            currentChar = a.charCodeAt(i);
            if (currentChar >= 48 && currentChar <= 57) {
                digitsCount++;
            }
        }
        if (digitsCount >= 2) {
            return true;
        } else {
            return false;
        }
    }
}

// passValidator('Pa$s$s');

function nxnMatrix(num) {
    let printCol = '';
    let result = '';

    for (let row = 0; row < num; row++) {
        for (let col = 0; col < num; col++) {
            printCol += num + ' ';
        }
        result += printCol + ' ' + '\n';
        printCol = '';
    }
    return result;
}

// console.log(nxnMatrix(3));

function perfectNum(num) {
    let a = 0;

    for(let i = 1; i <= num / 2; i++) {
        if(num % i == 0) {
            a += i;
        }
    }

    if(a == num && a != 0) {
        return 'We have a perfect number!';
    } else {
        return `It's not so perfect.`;
    }
}

// console.log(perfectNum(6));

function loadingBar(num) {
    numNum = Number(num.toString().charAt(0));
    if(num < 100) {
        console.log(`${num}% ${bars(numNum)}`);
        console.log('Still loading...');
    } else {
        console.log(`${num}% Complete!`);
        console.log('[%%%%%%%%%%]');
    }

    function bars(a) {
        let bar = '[';
        let barCount = 0;
    
        for(let i = 0; i < numNum; i++) {
            barCount++;
            bar += '%'
        }

        if(barCount < 10) {
            for(let j = barCount; j < 10; j++) {
                bar += '.';
            }
        }
        bar += ']';
        return bar;
    }
}

// loadingBar(50);

function factorialDivision(num1, num2) {
    let fOne = 1;
    let fTwo = 1;

    for(let i = 1; i <= num1; i++) {
        fOne *= i;
    }

    for(let j = 1; j <= num2; j++) {
        fTwo *= j;
    }
    console.log(`${(fOne / fTwo).toFixed(2)}`);
}

// factorialDivision(6, 2);

function carWash(arr) {
    let progress = 0;

    for(let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if(command == 'soap') {
            progress += 10;
        } else if(command == 'water') {
            progress += progress * 0.2;
        } else if(command == 'vacuum cleaner') {
            progress += progress * 0.25;
        } else {
            progress -= progress * 0.1;
        }
    }
    console.log(`The car is ${(progress).toFixed(2)}% clean.`);
}

// carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);

function numModification(num) {
    num = num.toString();
    let sum = 0;
    let numCount = 0;

    for(let i = 0; i < num.length; i++) {
        let currentNum = Number(num[i]);
        sum += currentNum;
        numCount++;
        console.log(currentNum, sum);
    }

    let result = sum / numCount;
    let j = 0;

    while(result < 5) {
        result += 9;
        numCount++;
        result
        if(result >= 5) {
            break;
        }
    }

}

numModification(101);