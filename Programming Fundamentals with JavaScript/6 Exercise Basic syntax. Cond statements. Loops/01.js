function test(arr) {
    let i = arr.shift();
    console.log(i);
    console.log(arr);

}

// test ([1, 2, 3]);

function ages(num) {
    let result;
    if (num >= 0 && num <= 2) {
        console.log("baby");
    } else if (num >= 3 && num <= 13) {
        console.log("child");
    } else if (num >= 14 && num <= 19) {
        console.log("teenager");
    } else if (num >= 20 && num <= 65) {
        console.log("adult");
    } else if (num >= 66) {
        console.log("elder");
    } else {
        console.log("out of bounds");
    }
}

// ages(100);

function rounding(n, precision) {

    if (precision > 15) {
        precision = 15;
    }
    n = n.toFixed(precision);
    n = parseFloat(n);
    console.log(n);
}

// rounding(3.1415926535897932384626433832795,2);

function division(num) {
    let arr = [2, 3, 6, 7, 10];
    let current = 0;
    let div = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        current = arr[i];

        if (num % current == 0) {
            count++;
            if (current > div) {
                div = current;
            }
        }
    }

    if (count !== 0) {
        console.log(`The number is divisible by ${div}`);
    } else {
        console.log(`Not divisible`);
    }
}

// division(1643);

function vacantion(people, type, day) {
    let price = 0;
    let total = 0;

    if (day == "Friday") {
        if (type == "Students") {
            price = 8.45;
        } else if (type == "Business") {
            price = 10.90;
        } else {
            price = 15;
        }
    } else if (day == "Saturday") {
        if (type == "Students") {
            price = 9.80;
        } else if (type == "Business") {
            price = 15.60;
        } else {
            price = 20;
        }
    } else {
        if (type == "Students") {
            price = 10.46;
        } else if (type == "Business") {
            price = 16;
        } else {
            price = 22.50;
        }
    }

    if (type == "Students" && people >= 30) {
        total = people * price;
        total *= 0.85;
    } else if (type == "Business" && people >= 100) {
        people -= 10;
        total = people * price;
    } else if (type == "Regular" && (people >= 10 && people <= 20)) {
        total = people * price;
        total *= 0.95;
    } else {
        total = people * price;
    }

    console.log(`Total price: ${total.toFixed(2)}`);
}

// vacantion(40,"Regular","Saturday");

function leap(num) {

    if (num % 400 == 0) {
        console.log(`yes`);
    } else if (num % 4 == 0) {
        if (num % 100 !== 0) {
            console.log(`yes`);
        } else {
            console.log(`no`);
        }
    } else {
        console.log(`no`);
    }

}

// leap(1900);

function printAndSum(start, end) {
    let sum = 0;
    let print = '';

    for (let i = start; i <= end; i++) {
        sum += i;
        print += i + ' ';
    }

    console.log(print);
    console.log(`Sum: ${sum}`);
}
// printAndSum(50, 60);

function triangle(num) {
    let currentPrint = '';

    for (let rows = 1; rows <= num; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            currentPrint += rows + ' ';
        }
        console.log(currentPrint);
        currentPrint = '';
    }

}

// triangle(3);

function multiplicationTable(num) {

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }

}

// multiplicationTable(2);

function login(arr) {
    let user = arr[0];
    let i = 1;
    let str = '';
    let newStr = '';
    let count = 0;

    while (i < arr.length) {
        str = arr[i];
        for (let j = str.length - 1; j >= 0; j--) {
            newStr += str[j];
        }
        if (user == newStr) {
            console.log(`User ${user} logged in.`);
        } else {
            count++;
            if (count == 4) {
                console.log(`User ${user} blocked!`);
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        }
        i++;
        newStr = '';
    }

}

// login(['sunny','rainy','cloudy','sunny','not sunny']);

function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let area = 0;
    let inner = 0;
    let outer = 0;
    let step = 0;

    for (let i = base; i >= 1; i -= 2) {
        step++;
        if (step % 5 == 0 && i > 2) {
            inner = (i - 2) * (i - 2);
            stone += inner * increment;
            outer = (4 * i) - 4;
            lapis += outer * increment;
        } else if (i <= 2) {
            gold += (i * i) * increment;
        } else {
            area = i * i;
            inner = (i - 2) * (i - 2);
            stone += inner * increment;
            outer = (4 * i) - 4;
            marble += outer * increment;
        }
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}

// pyramid(11, 1);

function bitcoin(arr) {
    let gold = 0;
    let goldCount = 0;
    let day = 0;
    let currentDay = 0;
    let tempMoney = 0;
    let bitcoin = 0;

    for (let i = 0; i < arr.length; i++) {
        day++;
        gold = arr[i];
        if (day % 3 == 0) {
            gold *= 0.7;
        }
        goldCount += gold;
        tempMoney += gold * 67.51;
        while (true) {
            if (tempMoney >= 11949.16) {
                tempMoney -= 11949.16;
                bitcoin++;
                if (bitcoin == 1) {
                    currentDay = day;
                }
            } else {
                break;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoin}`);

    if (bitcoin !== 0) {
        console.log(`Day of the first purchased bitcoin: ${currentDay}`);
    }

    console.log(`Left money: ${tempMoney.toFixed(2)} lv.`);
}

// bitcoin([3124.15, 504.212, 2511.124]);

function sort(arg1, arg2, arg3) {
    let arr = [arg1, arg2, arg3];
    let currentNum = 0;

    arr.sort(function (a, b) { return b - a });

    for (let i = 0; i < arr.length; i++) {
        currentNum = arr[i];
        console.log(currentNum);
    }
}

// sort(0, 0, 2);

function name(num) {
    let lastDigit = num % 10;

    switch (lastDigit) {
        case 0: console.log(`zero`); break;
        case 1: console.log(`one`); break;
        case 2: console.log(`two`); break;
        case 3: console.log(`three`); break;
        case 4: console.log(`four`); break;
        case 5: console.log(`five`); break;
        case 6: console.log(`six`); break;
        case 7: console.log(`seven`); break;
        case 8: console.log(`eight`); break;
        case 9: console.log(`nine`); break;
    }
}

// name(1643);

function day(arg1, arg2, arg3) {

    let a = new Date(arg1, arg2 - 1, arg3 + 1);
    console.log(a);
}

// day(2016, 9, 30);

function test(arg1, arg2, arg3) {

    const d = new Date(arg1, arg2 - 1, arg3 + 1);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
    console.log(`${ye}-${mo}-${da}`);

}

// test(2016, 9, 30);

function reverseStr(str) {
    let rev = str.split("").reverse().join("");

    console.log(rev);
}

// reverseStr("Hello");

function distance(x1, y1, x2, y2) {
    let a = x1 - x2;
    let b = y1 - y2;
    let c = Math.sqrt(a * a + b * b);

    console.log(c);

}

// distance(2, 4, 5, 0);