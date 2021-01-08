function solve() {
    // console.log(1 == "1");
    // console.log(1 === "1");
    // console.log(1 != 1);
    // console.log(2 !== 1);
    // console.log(1 > 1);
    // console.log(1 >= 1);
    // console.log(1 < 1);
    // console.log(1 <= 1);
}

solve();

function example() {
    let a = 5;
    let b = 10;

    // console.log(a < b);
    // console.log(a > 0);
    // console.log(a > 100);
    // console.log(a < a);
    // console.log(a <= 5);
    // console.log(b == 2 * a);
    // console.log("2" === 2);
}

example();

function condSt() {
    let a = 1;
    let b = 10;
    if (a <= 0) {
        if (a == 0) {
            // console.log("Is equal to zero");
        } else {
            // console.log("Is smaller from Zero");
        }
    } else {
        // console.log("Is bigger from zero");
    }
}

condSt();

function res(exam) {
    if (exam >= 5.50) {
        console.log("Excellent!");
    }
}

//res("5.50");

//video = 56.38

function greaterNumber(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (num1 > num2) {
        console.log(`${num1}`);
    } else {
        console.log(`${num2}`);
    }
}

//greaterNumber("5", "10");

function oddOrEven(num) {
    num = Number(num);
    if (num % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

//oddOrEven("10");

function numbers(num) {
    num = Number(num);
    if (num < 100) {
        console.log("Less than 100");
    } else {
        if (num <= 200) {
            console.log("Between 100 and 200");
        } else {
            console.log("Greater than 200");
        }
    }
}

//numbers("210");

function pass(input) {
    if (input == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

//pass("s3cr3t!P@ssw0rd");

function faceMath(figure, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let face = 0;
    if (figure == "square") {
        face = num1 * num1;
    } else if (figure == "rectangle") {
        face = num1 * num2;
    } else if (figure == "circle") {
        face = Math.PI * (num1 * num1);
    } else {
        face = (num1 * num2) / 2;
    }

    console.log(face.toFixed(3));
}

//faceMath("triangle", "4.5", "20");

function money(price, puzzles, dolls, bears, minions, trucks) {
    price = Number(price);
    puzzles = Number(puzzles);
    dolls = Number(dolls);
    bears = Number(bears);
    minions = Number(minions);
    trucks = Number(trucks);
    let numberOfToys = puzzles + dolls + bears + minions + trucks;
    let profit = (puzzles * 2.60) + (dolls * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);
    let discount = profit * 0.25;
    let profitWithDiscount = profit - discount;
    let rentForProfitWithDiscount = profitWithDiscount * 0.1;
    let profitWithDiscountAndRent = profitWithDiscount - rentForProfitWithDiscount;
    let rentForProfit = profit * 0.1;
    let profitWithRent = profit - rentForProfit;
    let allPrice = 0;
    if (numberOfToys >= 50) {
        if (profitWithDiscountAndRent >= price) {
            allPrice = profitWithDiscountAndRent - price;
            console.log(`Yes! ${allPrice.toFixed(2)} lv left.`);
        } else {
            allPrice = price - profitWithDiscountAndRent;
            console.log(`Not enough money! ${allPrice.toFixed(2)} lv needed.`);
        }

    } else {
        if (profitWithRent >= price) {
            allPrice = profitWithRent - price;
            console.log(`Yes! ${allPrice.toFixed(2)} lv left.`);
        } else {
            allPrice = price - profitWithRent;
            console.log(`Not enough money! ${allPrice.toFixed(2)} lv needed.`);
        }
    }
}

 //money("40.8", "20", "25", "30", "50", "10");

 function money(arg1, arg2, arg3, arg4, arg5, arg6) {
    let price = Number(arg1);
    let puzzles = Number(arg2);
    let dolls = Number(arg3);
    let bears = Number(arg4);
    let minions = Number(arg5);
    let trucks = Number(arg6);
    let toys = puzzles + dolls + bears + minions + trucks;
    let money = (puzzles * 2.60) + (dolls * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);
    if(toys >= 50) {
        money = money * 0.75;
    }
    money = money * 0.9;
    let diff = money - price;
    if(money >= price) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    }else{
        diff = Math.abs(diff);
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
    
}

 money("320", "8", "2", "5", "5", "1");