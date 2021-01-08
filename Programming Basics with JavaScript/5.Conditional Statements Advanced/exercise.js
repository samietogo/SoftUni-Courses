function week(arg) {
    let day = Number(arg);
    switch (day) {
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;
        default: console.log("Error"); break;
    }
}

//week("5");

function whatDay(arg) {
    let day = arg;
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break;
    }
}

//whatDay("Monday");

function whatDayTwo(arg) {
    let day = Number(arg);
    if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
        console.log("Working day");
    } else if (day == 6 || day == 7) {
        console.log("Weekend");
    } else {
        console.log("Error");
    }
}

//whatDayTwo("4");

function whatAnimals(arg) {
    let animal = arg;
    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "snake":
        case "tortoise":
        case "crocodile":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}

//whatAnimals("tortoise");

function salutation(arg1, arg2) {
    let age = Number(arg1);
    let sex = arg2;

    if (sex == "m") {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    } else if (sex == "f") {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    }
}

//salutation("13.5", "m");

function whatPlant(arg) {
    let plant = arg;
    switch (plant) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes": console.log("fruit"); break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot": console.log("vegetable"); break;
        default: console.log("unknown"); break;
    }
}

//whatPlant("banana");

function shop(arg1, arg2, arg3) {
    let product = arg1;
    let town = arg2;
    let amount = Number(arg3);
    let price = 0;

    switch (town) {
        case "Sofia":
            switch (product) {
                case "coffee": price = amount * 0.5; console.log(price.toFixed(2)); break;
                case "water": price = amount * 0.8; console.log(price.toFixed(2)); break;
                case "beer": price = amount * 1.2; console.log(price.toFixed(2)); break;
                case "sweets": price = amount * 1.45; console.log(price.toFixed(2)); break;
                case "peanuts": price = amount * 1.6; console.log(price.toFixed(2)); break;
            }
            break;
        case "Plovdiv":
            switch (product) {
                case "coffee": price = amount * 0.4; console.log(price.toFixed(2)); break;
                case "water": price = amount * 0.7; console.log(price.toFixed(2)); break;
                case "beer": price = amount * 1.15; console.log(price.toFixed(2)); break;
                case "sweets": price = amount * 1.3; console.log(price.toFixed(2)); break;
                case "peanuts": price = amount * 1.5; console.log(price.toFixed(2)); break;
            }
            break;
        case "Varna":
            switch (product) {
                case "coffee": price = amount * 0.45; console.log(price.toFixed(2)); break;
                case "water": price = amount * 0.7; console.log(price.toFixed(2)); break;
                case "beer": price = amount * 1.1; console.log(price.toFixed(2)); break;
                case "sweets": price = amount * 1.35; console.log(price.toFixed(2)); break;
                case "peanuts": price = amount * 1.55; console.log(price.toFixed(2)); break;
            }
            break;
    }
}

//shop("sweets", "Sofia", "2.23");

function trueNumber(arg) {
    let number = Number(arg);

    if (number >= -100 && number <= 100 && number !== 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

//trueNumber("100");

function office(arg1, arg2) {
    let hour = Number(arg1);
    let day = arg2;

    if (hour >= 10 && hour <= 18 && (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday" || day == "Saturday")) {
        console.log("open");
    } else {
        console.log("closed");
    }
}

//office("11", "Sunday");

function movieTicket(arg) {
    let day = arg;

    if (day == "Monday" || day == "Tuesday" || day == "Friday") {
        console.log("12");
    } else if (day == "Wednesday" || day == "Thursday") {
        console.log("14");
    } else {
        console.log("16");
    }
}

//movieTicket("Sunday");

function validNumber(arg) {
    let number = Number(arg);

    if ((number < 100 || number > 200) && number != 0) {
        console.log("invalid");
    }
}

//validNumber("0");

function fruitShop(arg1, arg2, arg3) {
    let fruit = arg1;
    let day = arg2;
    let amount = Number(arg3);
    let price = 0;

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        switch (fruit) {
            case "banana":
                price = 2.5;
                break;
            case "apple":
                price = 1.2;
                break;
            case "orange":
                price = 0.85;
                break;
            case "grapefruit":
                price = 1.45;
                break;
            case "kiwi":
                price = 2.7;
                break;
            case "pineapple":
                price = 5.5;
                break;
            case "grapes":
                price = 3.85;
                break;
            default:
                price = 0;
                break;
        }
    } else if (day == "Saturday" || day == "Sunday") {
        switch (fruit) {
            case "banana":
                price = 2.7;
                break;
            case "apple":
                price = 1.25;
                break;
            case "orange":
                price = 0.9;
                break;
            case "grapefruit":
                price = 1.6;
                break;
            case "kiwi":
                price = 3;
                break;
            case "pineapple":
                price = 5.6;
                break;
            case "grapes":
                price = 4.2;
                break;
            default:
                price = 0;
                break;
        }
    } else {
        price == 0;
    }

    if (price == 0) {
        console.log("error");
    } else {
        price = price * amount;
        console.log(price.toFixed(2));
    }

}

//fruitShop("apple", "Workday", "2");

function poundage(arg1, arg2) {
    let city = arg1;
    let sale = Number(arg2);
    let commision = 0;

    if (sale >= 0 && sale <= 500) {
        switch (city) {
            case "Sofia":
                commision = 0.05;
                break;
            case "Varna":
                commision = 0.045;
                break;
            case "Plovdiv":
                commision = 0.055;
                break;
            default:
                commision = 0;
                break;
        }
    } else if (sale > 500 && sale <= 1000) {
        switch (city) {
            case "Sofia":
                commision = 0.07;
                break;
            case "Varna":
                commision = 0.075;
                break;
            case "Plovdiv":
                commision = 0.08;
                break;
            default:
                commision = 0;
                break;
        }
    } else if (sale > 1000 && sale <= 10000) {
        switch (city) {
            case "Sofia":
                commision = 0.08;
                break;
            case "Varna":
                commision = 0.1;
                break;
            case "Plovdiv":
                commision = 0.12;
                break;
            default:
                commision = 0;
                break;
        }
    } else if (sale > 10000) {
        switch (city) {
            case "Sofia":
                commision = 0.12;
                break;
            case "Varna":
                commision = 0.13;
                break;
            case "Plovdiv":
                commision = 0.145;
                break;
            default:
                commision = 0;
                break;
        }
    } else {
        commision = 0;
    }

    if (commision != 0) {
        commision = commision * sale;
        console.log(commision.toFixed(2));
    } else {
        console.log("error");
    }
}

//poundage("Kaspichan", "-50");

function hotel(arg1, arg2, arg3) {
    let overnight = Number(arg1) - 1;
    let room = arg2;
    let feedback = arg3;
    let price = 0;
    let discount = 0;

    if (overnight < 9) {
        switch (room) {
            case "room for one person" :
                price = overnight * 18;
                break;
            case "apartment" :
                price = (overnight * 25) * 0.7;
                break;
            case "president apartment" :
                price = (overnight * 35) * 0.9;
                break;
        }
    } else if (overnight >= 10 && overnight <= 15) {
        switch (room) {
            case "room for one person" :
                price = overnight * 18;
                break;
            case "apartment" :
                price = (overnight * 25) * 0.65;
                break;
            case "president apartment" :
                price = (overnight * 35) * 0.85;
                break;
        }
    } else {
        switch (room) {
            case "room for one person" :
                price = overnight * 18;
                break;
            case "apartment" :
                price = (overnight * 25) * 0.5;
                break;
            case "president apartment" :
                price = (overnight * 35 * 0.8);
                break;
        }
    }

    if(feedback == "positive") {
        discount = price * 0.25;
        price = discount + price;
    } else {
        discount = price * 0.1;
        price = price - discount;
    }

    console.log(price.toFixed(2));
}

hotel("2",
"apartment",
"positive")



