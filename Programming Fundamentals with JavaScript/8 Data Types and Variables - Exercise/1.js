function sumDigits(num) {
    let arr = num.toString();
    arr = arr.split('');
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    console.log(sum);
}

// sumDigits(97561);

function charsToString(arg1, arg2, arg3) {
    console.log(`${arg1}${arg2}${arg3}`);
}

// charsToString('1','5','p');

function townInfo(arg1, arg2, arg3) {
    console.log(`Town ${arg1} has population of ${arg2} and area ${arg3} square km.`);
}

// townInfo('Sofia', 1286383, 492);

function metersToKm(num) {
    let km = num / 1000;
    console.log(`${km.toFixed(2)}`);
}

// metersToKm(798);

function poundsToDollars(num) {
    let dollars = num * 1.31;
    console.log(dollars.toFixed(3));
}

// poundsToDollars(80);

function reversedChars(arg1, arg2, arg3) {
    let arr = [arg1, arg2, arg3];
    let rev = arr.reverse();
    let revStr = '';

    for (let i = 0; i < rev.length; i++) {
        revStr += rev[i] + ' ';
    }
    console.log(revStr);
}

// reversedChars('A','B','C');

function lowerOrUpper(input) {

    let char = input;

    if (char == char.toUpperCase()) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

// lowerOrUpper('R');

function calc(arg1, arg2, arg3) {
    let result = 0;

    if (arg2 == "+") {
        result = arg1 + arg3;
    } else if (arg2 == "-") {
        result = arg1 - arg3;
    } else if (arg2 == "*") {
        result = arg1 * arg3;
    } else {
        result = arg1 / arg3;
    }

    console.log(result.toFixed(2));
}

// calc(25.5,'-',3);

function gladiator(lostCount, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armourCount = 0;
    let count = 0;
    let price = 0;

    for (let i = 1; i <= lostCount; i++) {
        count++;
        if (count % 2 == 0) {
            helmetCount++;
        }
        if (count % 3 == 0) {
            swordCount++;
        }
        if (count % 2 == 0 && count % 3 == 0) {
            shieldCount++;
            if (shieldCount % 2 == 0) {
                armourCount++;
            }
        }
    }
    price = (helmetCount * helmetPrice) + (swordCount * swordPrice) + (shieldCount * shieldPrice) + (armourCount * armourPrice);
    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);

}

// gladiator(7,2,3,4,5);

function spiceFlow(yield) {
    let days = 0;
    let spice = 0;

    while (yield >= 100) {
        days++;
        spice += (1 * yield) - 26;
        yield -= 10;
    }

    spice -= 26;

    if (spice <= 26) {
        spice = 0;
    }

    console.log(days);
    console.log(spice);
}

// spiceFlow(111);

function digitsWitnWords(word) {

    switch (word) {
        case "zero": console.log(0); break;
        case "one": console.log(1); break;
        case "two": console.log(2); break;
        case "three": console.log(3); break;
        case "four": console.log(4); break;
        case "five": console.log(5); break;
        case "six": console.log(6); break;
        case "seven": console.log(7); break;
        case "eight": console.log(8); break;
        case "nine": console.log(9); break;
    }
}

// digitsWitnWords('nine');

function isPrime(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

// console.log(isPrime(7));

function cone(r, h) {
    let s = Math.sqrt(r * r + h * h);
    let volume = Math.PI * r * r * h / 3;
    let area = Math.PI * r * (r + s);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
 
// cone(3, 5);

function biggestNum(arg1, arg2, arg3) {
    let arr = [arg1, arg2, arg3];
    let i = 0;
    let biggest = arg1;
    let current = arr[i];

    while(i < arr.length) {
        if(current > biggest) {
            biggest = current;
        }
        i++;
        current = arr[i];
    }
    console.log(biggest);
    
}

// biggestNum(43,43.2,43.1);

function convert(input) {
    let binary = parseInt(input, 2);
    console.log(binary);
}
 
// convert("11110000");

function chess(num) {
    let command = 0;
    console.log('<div class="chessboard">');
    for(let i = 1; i <= num; i++) {
        if(num % 2 == 0) {
            command++;
        }
        console.log('   <div>');
        for(let j = 1; j <= num; j++) {
            command++;
            if(num % 2 == 0) {
                if(command % 2 == 0) {
                    console.log('       <span class="black"></span>');
                } else {
                    console.log('       <span class="white"></span>');
                }
            } else {
                if(command % 2 != 0) {
                    console.log('       <span class="black"></span>');
                } else {
                    console.log('       <span class="white"></span>');
                }
            }
        }
        console.log('   </div>');
    }
    console.log('</div>');
}

// chess(3);

function triangleArea(arg1, arg2, arg3) {
    let p = (arg1 + arg2 + arg3) / 2;
    let area = Math.sqrt(p * (p - arg1) * (p - arg2) * (p - arg3));
    console.log(area);
}

triangleArea(2, 3.5, 4);