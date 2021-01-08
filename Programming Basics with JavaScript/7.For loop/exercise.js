function solve() {
    for(let i = 1; i <= 100; i += 1)

    console.log(i);
}

//solve();

function decreesingNumber(n) {
    n = Number(n);
    for(let i = n; i >= 1; i--) {
        console.log(i);
    }
}

//decreesingNumber("10");

function n3(n) {
    n = Number(n);

    for(i = 1; i <= n; i += 3) {
        console.log(i);
    }
}

//n3("22");

function test() {
    for(let i = 20; i >= 10; i--) {
        console.log(i)
    }
}

//test()

function evenOfTwo(arg) {
    let n = Number(arg);

    for(let i = 0; i <= n; i += 2) {
        console.log(Math.pow(2,i));
    }
}

//evenOfTwo(7)

function testText(arg) {
    let text = arg;

    console.log(text.length);
}

//testText("Fuck you")

function textFlow(arg) {
    let text = arg;

    for(let i = 0; i < text.length; i++) {
        let letter = text[i]
        console.log(letter)
    }
}

//textFlow("Guns & Fuks")

function vowelsSum(arg) {
    let text = arg;
    let letters;
    let vowel = 0;

    for(let i = 0; i < text.length; i++) {
        letters = text.charAt(i);

        switch(letters) {
            case "a" : vowel += 1; break;
            case "e" : vowel += 2; break;
            case "i" : vowel += 3; break;
            case "o" : vowel += 4; break;
            case "u" : vowel += 5; break;
        }
    }
    console.log(vowel);
}

//vowelsSum("beer");

function sumNumbers(arg) {
    let numbers = arg + "";
    let digit;
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        digit = numbers.charAt(i);

        switch(digit) {
            case "1" : sum += 1; break;
            case "2" : sum += 2; break;
            case "3" : sum += 3; break;
            case "4" : sum += 4; break;
            case "5" : sum += 5; break;
            case "6" : sum += 6; break;
            case "7" : sum += 7; break;
            case "8" : sum += 8; break;
            case "9" : sum += 9; break;
        }
    }
    console.log(`The sum of the digits is:${sum}`);
}

//sumNumbers("1234");

function sumNumbers2(arg) {
    let numbers = arg + "";
    let digits;
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        digits = Number(numbers[i]);
        sum += digits;
    }
    console.log(`The sum of the digits is:${sum}`);
}

//sumNumbers2(1234);

function dividedByNine(arg1,arg2) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let sum = 0;
    let digits = '';

    for(let i = num1; i <= num2; i++) {
        if(i % 9 === 0) {
            sum = sum + i;
            digits += i + " ";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(digits)
}

//dividedByNine("100", "200")

function dividedByNine2(arg1,arg2) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let sum = 0;

    for(let i = num1; i <= num2; i++) {
        if(i % 9 === 0) {
            sum = sum + i;
        }
    }

    console.log(`The sum: ${sum}`);

    for(let i = num1; i <= num2; i++) {
        if(i % 9 === 0) {
            sum = sum + i;
            console.log(i)
        }
    }
}

//dividedByNine2("100", "200")

function lili(arg1, arg2, arg3) {
    let years = Number(arg1);
    let price = Number(arg2);
    let toyPrise = Number(arg3);
    let birthGift = 0;
    let sum = 0;
    let still = 0;
    let toyCount = 0;

    for(let i = 1; i <= years; i++) {
        if(i % 2 == 0) {
            birthGift += 10;
            sum = birthGift + sum;
            still += 1;
        }
    }

    sum = sum - still;

    for(let i = 1; i <= years; i++) {
        if(i % 2 !== 0) {
            toyCount += 1;
        }
    }

    sum = sum + (toyCount * toyPrise);

    if(sum >= price) {
        sum = sum - price;
        console.log(`Yes! ${sum.toFixed(2)}`);
    } else {
        sum = price - sum;
        console.log(`No! ${sum.toFixed(2)}`);
    }
}

lili("21", "1570.98", "3");