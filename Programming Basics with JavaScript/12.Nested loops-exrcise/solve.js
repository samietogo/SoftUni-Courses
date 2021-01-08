function pyramid(input) {
    let n = input[0];
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for(let rows = 1; rows <= n; rows++) {
        for(let cols = 1; cols <= rows; cols++) {
            if(current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBigger) {
            break;
        }
    }

}

//pyramid(["280"])

function sumOddEven(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let sequence = "";

    for(let i = firstNum; i <= secondNum; i++) {
        let currentNum = i + "";
        let num1 = currentNum.charAt(0);
        let num2 = currentNum.charAt(1);
        let num3 = currentNum.charAt(2);
        let num4 = currentNum.charAt(3);
        let num5 = currentNum.charAt(4);
        let num6 = currentNum.charAt(5);
        num1 = Number(num1);
        num2 = Number(num2);
        num3 = Number(num3);
        num4 = Number(num4);
        num5 = Number(num5);
        num6 = Number(num6);

        if(num1 + num3 + num5 == num2 + num4 + num6) {
            sequence += currentNum + " ";
        }
    }
    console.log(sequence);
}

//sumOddEven(["123456",
//"124000"])

function sumOddEven2(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let sequence = "";

    for(let i = firstNum; i <= secondNum; i++) {
        let currentNum = i +"";
        let oddSum = 0;
        let evenSum = 0;
        for(let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if(j % 2 == 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if(oddSum == evenSum) {
            sequence += `${i} `;
        }
    }
    console.log(sequence);
}

// sumOddEven2(["123456",
// "124000"])

function primeNumbers(arr) {
    let current = arr[0];
    let index = 0;
    let primeSum = 0;
    let notPrimeSum = 0;

    while(current !== "stop") {
        let isPrime = true;
        let n = Number(current);

        if (n < 0) {
            console.log(`Number is negative.`);
            index++;
            current = arr[index];
            continue;
        }
        if (n == 1){
            isPrime = false;
        } else if(n == 2) {
            isPrime = true;
        } else {
            for(let i = 2; i < n; i++) {
                if(n % i == 0) {
                    isPrime = false;
                    break;
                }
            }  
        }

        if(isPrime) {
            primeSum += n;
        } else {
            notPrimeSum += n;
        }

        index++;
        current = arr[index]
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${notPrimeSum}`);

}

// primeNumbers(["30",
// "83",
// "33",
// "-1",
// "20",
// "stop"])

function trainers(input) {
    let scoreCount = Number(input[0]);
    let i = 1;
    let command = input[i];
    let allScore = 0;
    let divider = 0;

    while(command !== "Finish") {
        let challengeName = command;
        let currentScore = 0;
        i++;


        for(let j = 0; j < scoreCount; j++) {
            command = Number(input[i]);
            currentScore += command;
            i++;
            divider++;
        }

        allScore += currentScore;
        console.log(`${challengeName} - ${(currentScore / scoreCount).toFixed(2)}.`);
        command = input[i];
    }

    allScore /= divider;
    console.log(`Student's final assessment is ${allScore.toFixed(2)}.`);
}

// trainers(["2",
// "Objects and Classes",
// "5.77",
// "4.23",
// "Dictionaries",
// "4.62",
// "5.02",
// "RegEx",
// "2.88",
// "3.42",
// "Finish"])

function specialNumbers(input) {
    let number = Number(input);
    let print = "";

    for(let i = 1111; i <= 9999; i++) {
        let currentNumber = i + "";
        let digit1 = Number(currentNumber.charAt(0));
        let digit2 = Number(currentNumber.charAt(1));
        let digit3 = Number(currentNumber.charAt(2));
        let digit4 = Number(currentNumber.charAt(3));

        if(number % digit1 == 0 && number % digit2 == 0 && number % digit3 == 0 && number % digit4 == 0) {
            print += i + " ";
        }
    }

    console.log(print);

}

//specialNumbers(["9"])

function specialNumbers2(input) {
    let number = Number(input);
    let print = "";

    for(let i = 1111; i <= 9999; i++) {
        let temp = "";

        for(let j = 0; j < 4; j++) {
            let currentNumber = String(i);
            let currentDigit = Number(currentNumber.charAt(j));

            if(number % currentDigit == 0) {
                temp += currentDigit + "";
            }
        }
        temp = Number(temp);

        if(i == temp) {
            print += i + " ";
        }
    }

    console.log(print);

}

specialNumbers2(["3"])