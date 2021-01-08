function alum(arg1, arg2, arg3) {
    let number = Number(arg1);
    let type = arg2;
    let delivery = arg3;
    let price = 0;

    if(type == "90X130") {
        price = number * 110;
        if(number > 30 && number <= 60) {
            price -= price * 0.05;
        } else if(number > 60) {
            price -= price * 0.08;
        }
    } else if(type == "100X150") {
        price = number * 140;
        if(number > 40 && number <= 80) {
            price -= price * 0.06;
        } else if(number > 80) {
            price -= price * 0.1;
        }
    } else if(type == "130X180") {
        price = number * 190;
        if(number > 20 && number <= 50) {
            price -= price * 0.07;
        } else if(number > 50) {
            price -= price * 0.12;
        }
    } else if(type == "200X300") {
        price = number * 250;
        if(number > 22 && number <= 50) {
            price -= price * 0.09;
        } else if(number > 50) {
            price -= price * 0.14;
        }
    }

    if(delivery == "With delivery") {
        price += 60;
    }

    if(number > 99) {
        price -= price * 0.04;
    }

    if(number < 10) {
        console.log(`Invalid order`);
    } else {
        console.log(`${price.toFixed(2)} BGN`);
    }
}

alum("22" ,
    "100X150",
    "With delivery")