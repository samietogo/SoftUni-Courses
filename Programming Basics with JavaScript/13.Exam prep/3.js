function mobileOperator(arg1, arg2, arg3, arg4) {
    let duration = arg1;
    let type = arg2;
    let internet = arg3;
    let monts = Number(arg4);
    let price = 0;

    if(duration == "one") {
        if(type == "Small") {
            price = 9.98;
        } else if(type == "Middle") {
            price = 18.99;
        } else if(type == "Large") {
            price = 25.98;
        } else {
            price = 35.99;
        }
    } else {
        if(type == "Small") {
            price = 8.58;
        } else if(type == "Middle") {
            price = 17.09;
        } else if(type == "Large") {
            price = 23.59;
        } else {
            price = 31.79;
        }
    }

    if(internet == "yes") {
        if(price <= 10) {
            price += 5.50;
        } else if(price > 10 && price <= 30) {
            price += 4.35;
        } else {
            price += 3.85;
        }
    }
    price *= monts;

    if(duration == "two") {
        price -= price * 0.0375;
    }


    console.log(`${price.toFixed(2)} lv.`)

}

// mobileOperator("two",
//     "Large",
//     "no",
//     "10"
//     )

function energy(arg1, arg2, arg3) {
    let fruit = arg1;
    let set = arg2;
    let amount = Number(arg3);
    let price = 0;

    if(fruit == "Watermelon") {
        if(set == "small") {
            price = 56 * 2;
        } else {
            price = 28.70 * 5;
        }
    } else if(fruit == "Mango") {
        if(set == "small") {
            price = 36.66 * 2;
        } else {
            price = 19.60 * 5;
        }
    } else if(fruit == "Pineapple") {
        if(set == "small") {
            price = 42.10 * 2;
        } else {
            price = 24.80 * 5;
        }
    } else {
        if(set == "small") {
            price = 20 * 2;
        } else {
            price = 15.20 * 5;
        }
    }

    price *= amount;

    if(price >= 400 && price <= 1000) {
        price *= 0.85;
    } else if(price > 1000) {
        price *= 0.5;
    }

    console.log(`${price.toFixed(2)} lv.`);

}

// energy("Raspberry",
//     "small",
//     "50"
//     )

function fitnessCard(arg1, arg2, arg3, arg4) {
    let money = Number(arg1);
    let sex = arg2;
    let age = Number(arg3);
    let sport = arg4;
    let price = 0;

    if(sex == "m") {
        if(sport == "Gym") {
            price = 42;
        } else if(sport == "Boxing") {
            price = 41;
        } else if(sport == "Yoga") {
            price = 45;
        } else if(sport == "Zumba") {
            price = 34;
        } else if(sport == "Dances") {
            price = 51;
        } else {
            price = 39;
        }
    } else {
        if(sport == "Gym") {
            price = 35;
        } else if(sport == "Boxing") {
            price = 37;
        } else if(sport == "Yoga") {
            price = 42;
        } else if(sport == "Zumba") {
            price = 31;
        } else if(sport == "Dances") {
            price = 53;
        } else {
            price = 37;
        }
    }

    if(age <= 19) {
        price *= 0.8;
    }

    if(price <= money) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        price -= money;
        console.log(`You don't have enough money! You need $${price.toFixed(2)} more.`);
    }

}
fitnessCard("20",
    "f",
    "15",
    "Yoga"
    )