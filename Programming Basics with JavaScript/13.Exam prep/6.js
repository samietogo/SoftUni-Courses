function vetParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let currentPrice = 0;
    let total = 0;
    
    for(let i = 1; i <= days; i++) {

        for(let j = 1; j <= hours; j++) {

            if(i % 2 == 0 && j % 2 !== 0) {
                currentPrice += 2.50;
            }else if(i % 2 !== 0 && j % 2 == 0) {
                currentPrice += 1.25;
            } else {
                currentPrice += 1.00;
            }
        }
        total += currentPrice;
        console.log(`Day: ${i} - ${currentPrice.toFixed(2)} leva`);
        currentPrice = 0;
    }

    console.log(`Total: ${total.toFixed(2)} leva`);

}

// vetParking(["2",
//     "5"]
//     )

function tournament(input) {
    let days = Number(input[0]);
    let j = 1;
    let win = 0;
    let lose = 0;
    let moneyWin = 0;
    let tempMoneyWin = 0;
    let countWinDay = 0;
    let countLoseDay = 0;

    for(let i = 0; i < days; i++) {
        let command = input[j];
        let sport = input[j];
        let result = input[j + 1];
        moneyWin = 0;

        while(command !== "Finish") {

            if(result == "win") {
                win++;
                moneyWin += 20;
            } else {
                lose++;
            }
            j += 2;
            command = input[j];
            sport = input[j];
            result = input[j + 1];
        }

        if(win > lose) {
            moneyWin += moneyWin * 0.1;
            countWinDay++;
        } else if(win < lose) {
            countLoseDay++;
        }

        win = 0;
        lose = 0;
        tempMoneyWin += moneyWin;
        j += 1;
    }

    if(countWinDay > countLoseDay) {
        tempMoneyWin += tempMoneyWin * 0.2;
        console.log(`You won the tournament! Total raised money: ${tempMoneyWin.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${tempMoneyWin.toFixed(2)}`);
    }

}

// tournament(["2",
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

function pin(input) {
    let firstDigit = input[0];
    let secondDigit = input[1];
    let thirdDigit = input[2];
    let maxNum = Number(firstDigit + secondDigit + thirdDigit);

    for(let i = 222; i <= maxNum; i++) {
        let currentNum = i + "";
        let currentFirst = Number(currentNum.charAt(0));
        let currentSecond = Number(currentNum.charAt(1));
        let currentThird = Number(currentNum.charAt(2));
        let isPrime = true;
        
        if(currentSecond == 1) {
            isPrime = false;
        } else if(currentSecond == 2) {
            isPrime = true;
        } else {
            for(let j = 2; j < currentSecond; j++) {
                if(currentSecond % j == 0) {
                    isPrime = false;
                    break;
                }
            } 
        }

        if(currentFirst % 2 == 0 && isPrime == true && currentThird % 2 == 0) {
            if(currentSecond <= secondDigit && currentSecond !== 0 && currentThird <= thirdDigit && currentThird !== 0) {
                console.log(`${currentFirst} ${currentSecond} ${currentThird}`);
            }
        }
    }
}

pin(["3",
    "5",
    "5"
    ])