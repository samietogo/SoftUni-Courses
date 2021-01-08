function concat(nameOne, nameTwo, del) {

    console.log(`${nameOne}${del}${nameTwo}`);

}

// concat('Linda', 'Terry', '=>');

function rightPlace(str, symbol, template) {
    let result = str.replace('_', symbol);

    let output = result == template ? "Matched" : "Not Matched";

    console.log(output);

    // if(result == template) {
    //     console.log(`Matched`);
    // } else {
    //     console.log(`Not Matched`);
    // }
}

// rightPlace('Str_ng', 'i', 'String');

function intOrFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;

    sum % 1 == 0 ? sum += ' - Integer' : sum += ' - Float';

    console.log(sum);

    // let sumTemp = Math.trunc(sum);

    // if(sum == sumTemp) {
    //     console.log(`${sum} - Integer`);
    // } else {
    //     console.log(`${sum} - Float`);
    // }
}

// intOrFloat(9, 100, 1.1);

function amazingNum(num) {
    let numToStr = num.toString();
    let sum = 0;

    for(let i = 0; i < numToStr.length; i++) {
        sum += Number(numToStr[i]);
    }

    let sumToStr = sum.toString();

    if(sumToStr.includes('9')) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

// amazingNum(9999);

function gramophone(band, album, song) {
    let time = (band.length * album.length) * song.length / 2;
    let rotation = Math.ceil(time / 2.5);

    console.log(`The plate was rotated ${rotation} times.`);
}

// gramophone('Black Sabbath', 'Paranoid', 'War Pigs');

function fuel(distance, passengers, priceForLiter) {
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.100;
    let price = priceForLiter * neededFuel;
    console.log(`Needed money for that trip is ${price}lv.`);

}

// fuel(260, 9, 2.49);

function centuries(num) {
    let years = num * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${num} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}

// centuries(1);

function specialNum(num) {

    for(let i = 1; i <= num; i++) {
        let current = i.toString();
        let result = 0;

        for(j = 0; j < current.length; j++) {
            result += Number(current[j]);
        }

        if(result == 5 || result == 7 || result == 11) {
            console.log(`${current} -> True`);
        } else {
            console.log(`${current} -> False`);
        }
    }
}

// specialNum(35);

function latinLetters(num) {

    let output = '';

    for(let i = 0; i < num; i++) {
        for(let j = 0; j < num; j++) {
            for(let k = 0; k < num; k++) {
                let letterOne = String.fromCharCode(97 + i);
                let letterTwo = String.fromCharCode(97 + j);
                let letterThree = String.fromCharCode(97 + k);
                output = letterOne + letterTwo + letterThree;
                console.log(output);
            }
        }
    }
}

latinLetters(3);