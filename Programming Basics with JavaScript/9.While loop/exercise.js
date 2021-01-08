function test() {
    let arr = [1,2,3,4,"A",6];
    let text = "text";
    let ind = arr.length - 1;

    console.log(arr[4]);
    console.log(text[1]);
    console.log(arr.length);
    console.log(text.length);
    console.log(arr.length - 1);
    console.log(text.length - 1);
    console.log(ind);
}


//test();

function test2() {
    let i = 1;
    while(i <= 10) {
        console.log(i);
        i++;
    }

}
    
//test2();

function example() {
    let a = 5;

    while (true) {
        if (a > 10) {
            break;
        }

        console.log(`a = ${a}`);
        a++;
    }
}

//example();

function wordRead2 (input) {
    let index = 0;

    while (index <= input.length) {
    let word = input[index];
        if (word == "Stop") {
            break;
        }
        index++;
        console.log(word);
    }
}

//wordRead(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);

function wordRead2 (input) {
    let index = 0;
    let word = input[index];

    while (word !== "Stop") {
        console.log(word);
        index++;
        word = input[index];
    }
}

//wordRead2(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);

function pass(input) {
    let user = input[0];
    let pass = input[1];
    let data = input[2];
    let i = 3;

    while (data !== pass) {
        data = input[i];
        i++;
    }

    console.log(`Welcome ${user}!`);
}

//pass(["Nakov", "1234", "Pass", "1324", "1234"]);

function pass2(input) {
    let i = 0;
    let user = input[i];
    i++;
    let pass = input[i];
    i++;
    let currentPass = input[i];
    i++;

    while(pass !== currentPass) {
        currentPass = input[i];
        i++;
    }

    console.log(`Welcome ${user}!`)
}

//pass2(["Nakov", "1234", "Pass", "1324", "1234"]);

function sumNumbers(input) {
    let i = 0;
    let compare = Number(input[0]);
    let sum = 0;
    let nextNumber = 0;
    i++;

    while(sum < compare) {
        nextNumber = Number(input[i]);
        i++;
        sum = sum + nextNumber;
    }

    console.log(sum);

}

//sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);

function seriesOfNumbers(input) {
    let inputNumber = input[0];
    let i = 1;

    while(i <= inputNumber) {
        console.log(i);
        i = i * 2 + 1;
    }
}

//seriesOfNumbers(["31"]);

function accBallance (input) {
    let i = 0;
    let total = 0;
    let command = input[i];

    while (command !== "NoMoreMoney") {
        let money = Number(input[i]);
        command = (input[i]);
        i++;
        if(command =="NoMoreMoney") {
            break;
        } else if (command < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        console.log(`Increase: ${money.toFixed(2)}`);
        total += money;
    }

    console.log(`Total: ${total.toFixed(2)}`);
}

//accBallance(["120", "45.55", "-150"])

function accBallance2 (input) {
    let deposit = input[0];
    let balance = 0;
    let i = 1;

    while (deposit !== "NoMoreMoney") {
        let amount = Number(deposit);

        if(amount < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        deposit = input[i];
        i++;
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}

//accBallance2(["5.51",  "69.42", "100", "NoMoreMoney"]);

function biggestNumber(input) {
    let entry = input[0];
    let biggestNum = Number(entry);
    let i = 1;

    while (entry !== "Stop") {
        digit = Number(entry);
        if(digit > biggestNum) {
            biggestNum = digit;
        }
        entry = input[i];
        i++;
    }
    console.log(biggestNum);
}

//biggestNumber(["-1", "-2", "Stop"]);

function smallestNumber(input) {
    let entry = input[0];
    let smallestNum = Number(entry);
    let i = 1;

    while (entry !== "Stop") {
        digit = Number(entry);
        if(digit < smallestNum) {
            smallestNum = digit;
        }
        entry = input[i];
        i++;
    }
    console.log(smallestNum);
}

//smallestNumber(["-1", "-2", "Stop"]);

function graduation(input) {
    let i = 0;
    let name = input[i];
    i++;
    let level = 1;
    let sccore = 0;
    let error = 0;

    while(level <= 12) {
        let grade = Number(input[i]);
        i++;

        if(grade >= 4) {
            sccore += grade;
            level++;
        } else {
            error += 1;

            if(error > 1) {
                console.log(`${name} has been excluded at ${level} grade`);
                break;
            }
        }

        if(level > 12) {
            let averageGrade = sccore / 12;
            console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
        }
    }
    
}

// graduation(["Gosho", 
// "5",
// "5.5",
// "6",
// "5.43",
// "5.5",
// "6",
// "5.55",
// "5",
// "6",
// "6",
// "5.43",
// "5"])


function solve() {
    let i = 0;

    while(i <= 20) {
        if(i % 2 !== 0) {
            i++;
            continue;
        }
        console.log(i);
        i++;
    }
}

//solve();

function relocation(input) {
    let i = 0;
    let w = Number(input[i]);
    i++;
    let l = Number(input[i]);
    i++;
    let h = Number(input[i]);
    i++;
    let cubicMeters = w * l * h;
    let isFreeSpace = true;
    let command = input[i];
    i++;

    while(command != "Done") {
        let box = Number(command);
        cubicMeters -= box;

        if(cubicMeters < 0) {
            isFreeSpace = false;
            console.log(`No more free space! You need ${Math.abs(cubicMeters)} Cubic meters more.`);
            break;
        }
        command = input[i];
        i++;
    }

    if(isFreeSpace) {
        console.log(`${cubicMeters} Cubic meters left.`);
    }

}

// relocation(["10",
// "1",
// "2",
// "4",
// "6",
// "Done"])

