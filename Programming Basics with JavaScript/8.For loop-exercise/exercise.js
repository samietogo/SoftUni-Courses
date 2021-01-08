function endOfSeven() {
    for (let i = 7; i <= 997; i++) {
        if (i % 10 == 7) {
            console.log(i);
        }
    }
}

//endOfSeven();

function multiplicationFive(arg) {
    let digit = Number(arg);
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum = i * digit;
        console.log(`${i} * ${digit} = ${sum}`)
    }
}

//multiplicationFive("9");

function leapYears(arg1, arg2) {
    let leap = Number(arg1);
    let endYear = Number(arg2);

    for (i = leap; i <= endYear; i += 4) {
        console.log(i);
    }
}

//leapYears("2020", "2032");

function factoriel2(arg) {
    let digit = Number(arg);
    let sum = 1;

    for (let i = 1; i <= digit; i++) {
        sum *= i;
    }
    console.log(sum);
}

//factoriel("8");

function factoriel2(arg) {
    let digit = Number(arg);
    let sum = 1;

    for (let i = digit; i >= 2; i--) {
        sum *= i;
    }
    console.log(sum);
}

//factoriel2("8");

function wordCount(massage) {
    let count = 1;

    for (let i = 0; i < massage.length; i++) {
        let symbol = massage[i];

        if (symbol == ' ') {
            count++;
        }
    }

    if (count <= 10) {
        console.log(`The message was send successfully!`);
    } else {
        console.log(`The message is too long to be send! Has ${count} words.`)
    }
}

//wordCount("This message has ten words and you can send it!");

function fuelConsumption(arg1, arg2, arg3) {
    let fuel = Number(arg1);
    let consumption = Number(arg2);
    let laps = Number(arg3);

    for (let i = 0; i < laps; i++) {
        fuel -= consumption - 0.1;

        if (fuel <= 0) {
            console.log(`You are out of fuel in round ${i}!`)
            break;
        }
    }

    if (fuel > 0) {
        console.log(`Congrats! You won the race!`);
    }

}

//fuelConsumption("70", "6.5", "10");

function hisogram(arg) {
    let n = Number(arg[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 1; i < arg.length; i++) {
        let currentNum = Number(arg[i]);

        if(currentNum < 200) {
            p1++;
        } else if(currentNum < 400) {
            p2++;
        } else if(currentNum < 600) {
            p3++;
        } else if(currentNum < 800) {
            p4++;
        } else {
            p5++;
        }
    }
    
    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
    console.log(`${(p4 / n * 100).toFixed(2)}%`);
    console.log(`${(p5 / n * 100).toFixed(2)}%`);
}

//hisogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);

function divideWithoutRemainder(arg) {
    let n = Number(arg[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for(let i = 1; i < arg.length; i++) {
        let current = Number(arg[i]);
        if(current % 2 == 0) {
            p1++;
        }

        if(current % 3 == 0) {
            p2++;
        }

        if(current % 4 == 0) {
            p3++;
        }
    }

    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
}

//divideWithoutRemainder(["3", "3", "6", "9"]);

function noSalary(input) {
    let salary = Number(input[1]);

    for(let i = 2; i < input.length; i++) {
        let current = input[i];

        if(current == "Facebook") {
            salary -= 150;
        } else if(current == "Instagram") {
            salary -= 100;
        } else if(current == "Reddit") {
            salary -= 50;
        }

        if(salary <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
    }

    if(salary > 0) {
        console.log(salary);
    }
}

//noSalary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);

function smallestNumber(input) {

    let smallestNum = Number(input[1]);

    for(let i = 1; i < input.length; i++) {
        currentNum = Number(input[i]);

        if(currentNum < smallestNum) {
            smallestNum = currentNum;
        }
    }
    console.log(smallestNum);
}

//smallestNumber(["2", "-1", "-2"]);