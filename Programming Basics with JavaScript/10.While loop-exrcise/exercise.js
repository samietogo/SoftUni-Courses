function findBook (input) {
    let i = 0;
    let favoriteBook = input[i];
    i++;
    let currentBook = input[i];
    i++;
    let count = 0;

    while(currentBook != favoriteBook) {
        currentBook = input[i];
        count += 1;

        if(currentBook == "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${count} books.`);
            break;
        }
        i++;
    }

    if(currentBook != "No More Books") {
        console.log(`You checked ${count} books and found it.`);
    }
}

// findBook(["Troy",
// "Stronger",
// "Life Style",
// "Troy"])

function exam(input) {
    let i = 0;
    let lowScore = input[i];
    i++;
    let exam = input[i];
    i++;
    let score =  Number(input[i]);
    let averageScore = 0;
    let currentLowScore = 0;
    let count = 0;
    let lastExam = 0;
    let breakNeed = true;

    while(exam !== "Enough") {
        lastExam = exam;
        i++;
        exam = input[i];

        if(score <= 4) {
            currentLowScore += 1;

            if(currentLowScore == lowScore) {
                console.log(`You need a break, ${currentLowScore} poor grades.`);
                breakNeed = false;
                break;
            }
        }
        averageScore += score;
        i++;
        score = Number(input[i]);
        count += 1;
        
    }
    averageScore /= count;

    if(breakNeed == true) {
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${count}`);
        console.log(`Last problem: ${lastExam}`);
    }

}

// exam(["3",
// "Money",
// "6",
// "Story",
// "4",
// "Spring Time",
// "5",
// "Bus",
// "6",
// "Enough"])


function vacation (input) {
    let i = 0;
    let vacatonPrice = Number(input[i]);
    i++;
    let money = Number(input[i]);
    i++;
    let action = input[i];
    i++;
    let actionMoney = Number(input[i]);
    let days = 0;
    let isSpend = false;
    let isSpendControl = 0;

    while(money < vacatonPrice) {
        days++;

        if(action == "spend") {
            isSpend = true;
            money -= actionMoney;

            if(money <= 0) {
                money = 0;
            }
            
        } else {
            isSpend = false;
            money += actionMoney;
        }

        if(isSpend == true) {
            isSpendControl++;
        } else {
            isSpendControl = 0;
        }

        if(isSpendControl == 5) {
            console.log(`You can't save the money.`);
            console.log(`${days}`);
        }
        i++;
        action = input[i];
        i++;
        actionMoney = Number(input[i]);
    }

    if(money >= vacatonPrice) {

        console.log(`You saved the money for ${days} days.`);
    }

}

// vacation(["110",
// "60",
// "spend",
// "10",
// "spend",
// "10",
// "spend",
// "10",
// "spend",
// "10",
// "spend",
// "10"])

function stepsGoal(input) {
    const goal= 10000;
    let steps = 0;
    let i = 0;

    while(steps < goal) {
        let current = input[i];

        if(current == "Going home") {
            steps += Number(input[i + 1]);
            break;
        }

        steps += Number(current);
        i++;
    }

    if(steps >= goal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - goal} steps over the goal!`);
    } else {
        console.log(`${goal - steps} more steps to reach goal.`);
    }

}

// stepsGoal(["125",
// "250",
// "4000",
// "30",
// "2678",
// "4682"])

function coinsChange(input) {
    change = Number(input);
    let changeCoins = change * 100;
    let coins = 0;

    while(changeCoins >= 1) {
        switch(true) {
            case (changeCoins >= 200):
                coins++;
                changeCoins -= 200;
                break;
            case (changeCoins >= 100):
                coins++;
                changeCoins -= 100;
                break;
            case (changeCoins >= 50):
                coins++;
                changeCoins -= 50;
                break;
            case (changeCoins >= 20):
                coins++;
                changeCoins -= 20;
                break;
            case (changeCoins >= 10):
                coins++;
                changeCoins -= 10;
                break;
            case (changeCoins >= 5):
                coins++;
                changeCoins -= 5;
                break;
            case (changeCoins >= 2):
                coins++;
                changeCoins -= 2;
                break;
            case (changeCoins >= 1):
                coins++;
                changeCoins -= 1;
                break;
        }
    }

    console.log(coins);

}

//coinsChange(["2.73"])

function cake(input) {
    let i = 0;
    let w = Number(input[i]);
    i++;
    let d = Number(input[i]);
    i++;
    let cakePieces = w * d;
    let pieces = input[i];
    let takenPieces = 0;
    let leftPieces = 0;

    while(i !== input.length) {
        pieces = input[i];

        if(pieces == "STOP") {

            if(takenPieces < cakePieces) {
                leftPieces = cakePieces - takenPieces;
                console.log(`${leftPieces} pieces are left.`);
                break;
            } else {
                leftPieces = takenPieces - cakePieces;
                console.log(`No more cake left! You need ${leftPieces} pieces more.`);
            }
        }
        takenPieces += Number(pieces);
        i++;

    }

    if(takenPieces >= cakePieces) {
        leftPieces = takenPieces - cakePieces;
        console.log(`No more cake left! You need ${leftPieces} pieces more.`);
    }

}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])




