function testClock() {
    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m++) {
            for (let s = 0; s < 60; s++) {
                if (s < 10) {
                    if(m < 10) {
                        console.log(`${h}:0${m}:0${s}`);
                    } else {
                        console.log(`${h}:${m}:0${s}`);
                    }
                } else if(m < 10) {
                    if(s < 10) {
                        console.log(`${h}:0${m}:0${s}`);
                    } else {
                        console.log(`${h}:0${m}:${s}`);
                    }
                } else {
                    console.log(`${h}:${m}:${s}`);
                }
            }
        }
    }
}

//testClock()

function clock() {
    for(let h = 0; h < 24; h++) {
        for(let m = 0; m < 60; m++) {
            console.log(`${h}:${m}`);
        }
    }
}

//clock()

function multiplicationTable() {
    for(let first = 1; first <= 10; first++) {
        for(let second = 1; second <= 10; second++) {
            console.log(`${first} * ${second} = ${first * second}`);
        }
    }
}

//multiplicationTable()

function combinations(input) {
    let n = Number(input);
    let result = 0;
    for(let x1 = 0; x1 <= n; x1++) {
        for(let x2 = 0; x2 <= n; x2++) {
            for(let x3 = 0; x3 <= n; x3++) {
                if(x1 + x2 + x3 == n) {
                    result++;
                }
            }
        }
    }
    console.log(result);
}

//combinations(["5"])

function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end =  Number(input[1]);
    let magicNumber = Number(input[2]);
    let count = 0;
    let countCombi = 0;
    let isCombi = false;

    for(let a = start; a <= end; a++) {
        for(let b = start; b <= end; b++) {
            count++;

            if (a + b == magicNumber) {
                isCombi = true;
                countCombi++;
                switch(countCombi) {
                    case 1 : 
                    console.log(`Combination N:${count} (${a} + ${b} = ${magicNumber})`);
                    break;
                }
            }
        }
    }
     
    if(!isCombi) {
        console.log(`${count} combinations - neither equals ${magicNumber}`);
    }
}

// sumOfTwoNumbers(["88", 
// "888", 
// "2000"])

function sumOfTwoNumbers2(input) {
    let start = Number(input[0]);
    let end =  Number(input[1]);
    let magicNumber = Number(input[2]);
    let count = 0;
    let isCombi = false;

    for(let a = start; a <= end; a++) {

        if(isCombi) {
            break;
        }
        for(let b = start; b <= end; b++) {
            count++;

            if (a + b == magicNumber) {
                isCombi = true;
                console.log(`Combination N:${count} (${a} + ${b} = ${magicNumber})`);
                break;
            }
        }
    }
     
    if(!isCombi) {
        console.log(`${count} combinations - neither equals ${magicNumber}`);
    }
}

// sumOfTwoNumbers2(["88", 
// "888", 
// "2000"])

function travel(input) {
    let destination = input[0];
    let neededMoney = Number(input[1]);
    let i = 2;
    let savedMoney = input[i];
    let sum = 0;

    for(i; i < input.length; i++) {
        savedMoney = input[i];

        if(savedMoney == "End") {
            break;
        } else {
            savedMoney = Number(savedMoney);
        }
        sum += savedMoney;
        if(sum >= neededMoney) {
            console.log(`Going to ${destination}!`);
            sum = 0;
            i++;
            destination = input[i];
            i++;
            neededMoney = Number(input[i]);
        }
    }
}

// travel(["Greece",
// "1000",
// "200",
// "200",
// "300",
// "100",
// "150",
// "240",
// "Spain",
// "1200",
// "300",
// "500",
// "193",
// "423",
// "End"])

function building(input) {
    let floor = Number(input[0]);
    let app = Number(input[1]);

    for(let i = floor; i > 0; i--) {
        let result = "";
        for(let j = 0; j < app; j++) {

            if(floor == i) {
                result += `L${i}${j} `;
            } else if(i % 2 == 0) {
                result += `O${i}${j} `;
            } else {
                result += `A${i}${j} `;
            }
        }
        console.log(result);
    }
}

//building(["6", "4"])

function cristmasChalenge(input) {
    let i = 0;
    let day = Number(input[i]);
    i++;
    let sumMoney = 0;
    let totalWins = 0;
    let totalLose = 0;

    for(let j = 0; j < day; j++) {
        let command = input[i];
        i++;
        let tempMoney = 0;
        let countWin = 0;
        let countLose = 0;

        while(command !== "Finish") {
            let sportType = command;
            let score = input[i];
            i++;

            if(score == "win") {
                tempMoney += 20;
                countWin++;
            } else {
                countLose++;
            }
            
            command = input[i];
            i++;
        }

        if(countWin > countLose) {
            tempMoney *= 1.10;
            totalWins++;
        } else {
            totalLose++;
        }
        sumMoney += tempMoney;
    }

    if(totalWins > totalLose) {
        sumMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${sumMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${sumMoney.toFixed(2)}`);
    }
}

// cristmasChalenge(["2",
//     "volleyball",
//     "win",
//     "football",
//     "lose",
//     "basketball",
//     "win",
//     "Finish",
//     "golf",
//     "win",
//     "tennis",
//     "win",
//     "badminton",
//     "win",
//     "Finish"
//     ])

function movieTickets(input) {
    let i = 0;
    let movie = input[i];
    i++;
    let seats = input[i];
    i++;
    let ticketType = input[i];

    while(ticketType == "standard" || ticketType == "kid" || ticketType == "student") {
        while(ticketType !== "Finish" && ticketType !== "End") {
            console.log(ticketType);
            i++;
            ticketType = input[i];
        }
        
        ticketType = input[i + 3];
    }
}

movieTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
