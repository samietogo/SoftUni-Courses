function movie(arg1, arg2, arg3) {
    let type = arg1;
    let rows = Number(arg2);
    let colums = Number(arg3);
    let price = 0;
    
    if (type == "Premiere") {
        price = rows * colums * 12;
    } else if (type == "Normal") {
        price = rows * colums * 7.5;
    } else {
        price = rows * colums * 5;
    }

    console.log(`${price.toFixed(2)} leva`);
}

//movie("Discount", "12", "30");

function summerOutfit(arg1, arg2) {
    let degrees = Number(arg1);
    let timeOfDay = arg2;
    let outfit = 0;
    let shoes = 0;

    if (degrees >= 10 && degrees <= 18) {
        switch(timeOfDay) {
            case "Morning" :
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon" :
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Evening" :
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else if(degrees > 18 && degrees <= 24) {
        switch(timeOfDay) {
            case "Morning" :
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon" :
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Evening" :
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else {
        switch(timeOfDay) {
            case "Morning" :
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon" :
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening" :
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

//summerOutfit("22", "Afternoon");

function garden(arg1, arg2, arg3) {
    let flower = arg1;
    let count = Number(arg2);
    let budget = Number(arg3);
    let price;
    let discount;
    let total;
    
    switch(flower) {
        case "Roses" :
            price = count * 5;
            if(count > 80) {
                discount = price * 0.1;
                price = price - discount;
            }
            break;
        case "Dahlias" :
            price = count * 3.8;
            if(count > 90) {
                discount = price * 0.15;
                price = price - discount;
            }
            break;
        case "Tulips" :
            price = count * 2.8;
            if(count > 80) {
                discount = price * 0.15;
                price = price - discount;
            }
            break;
        case "Narcissus" :
            price = count * 3;
            if(count < 120) {
                discount = price * 0.15;
                price = price + discount;
            }
            break;
        case "Gladiolus" :
            price = count * 2.5;
            if(count < 80) {
                discount = price * 0.2;
                price = price + discount;
            }
            break;
    }

    total = budget - price;

    if(budget >= price) {
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${total.toFixed(2)} leva left.`);
    } else {
        total = Math.abs(total);
        console.log(`Not enough money, you need ${total.toFixed(2)} leva more.`)
    }
}

//garden("Roses", "55", "250");

function fishingBoat(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let season = arg2;
    let count = Number(arg3);
    let price;
    let diff;

    if(season == "Spring") {
        price = 3000;
    } else if(season == "Summer" || season == "Autumn") {
        price = 4200;
    } else if(season == "Winter") {
        price = 2600;
    }

    if(count <= 6) {
        price *= 0.9;
    } else if(count >= 7 && count <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }

    if(count % 2 == 0 && season != "Autumn") {
        price *= 0.95;
    }

    diff = budget - price;

    if(budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`);
    }
}

//fishingBoat(2000, "Winter", 13);

function trip(budget, season) {
    budget = Number(budget);
    let destination;
    let type;

    if(budget <= 100) {
        destination = "Bulgaria";
    } else if(budget <= 1000) {
        destination = "Balkans";
    } else {
        destination = "Europe";
    }

    if(season == "summer" && destination == "Bulgaria") {
        budget *= 0.3;
        type = "Camp";
    } else if(season == "summer" && destination == "Balkans") {
        budget *= 0.4;
        type = "Camp";
    } else if(season == "winter" && destination == "Bulgaria") {
        budget *= 0.7;
        type = "Hotel";
    } else if(season == "winter" && destination == "Balkans") {
        budget *= 0.8;
        type = "Hotel";
    } else {
        budget *= 0.9;
        type = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${budget.toFixed(2)}`);
}

//trip("1500", "summer");

function calc(n1, n2, operator) {
    n1 = Number(n1);
    n2 = Number(n2);
    let result;
    let evenOrOdd;

    if(operator === '+') {
        result = n1 + n2;
    } else if(operator === '-') {
        result = n1 - n2;
    } else if(operator === '*') {
        result = n1 * n2;
    } else if(operator === '/') {
        result = n1 / n2;
    } else {
        result = n1 % n2;
    }

    if(result % 2 == 0) {
        evenOrOdd = "even";
    } else {
        evenOrOdd = "odd";
    }

    if(operator === '+' || operator === '-' || operator === '*') {
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
    } else if(operator === '/' && n2 !== 0) {
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    } else if(operator === '%' && n2 !== 0) {
        console.log(`${n1} % ${n2} = ${result}`);
    } else {
        console.log(`Cannot divide ${n1} by zero`);
    }
}

//calc("112", "0", "/");

function hotel(month, count) {
    count = Number(count);
    let studio;
    let appartment;

    if(month == "May" || month == "October") {
        studio = 50;
        appartment = 65;
    } else if(month == "June" || month == "September") {
        studio = 75.2;
        appartment = 68.7;
    } else {
        studio = 76;
        appartment = 77;
    }

    if(count > 7 && count <= 14 && (month == "May" || month == "October")) {
        studio *= 0.95;
    } else if(count > 14 && (month == "May" || month == "October")) {
        studio *= 0.7;
    } else if(count > 14 && (month == "June" || month == "September")) {
        studio *= 0.8;
    }

    if(count > 14) {
        appartment *= 0.9;
    }

    studio = studio * count;
    appartment = appartment * count;

    console.log(`Apartment: ${appartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}

//hotel("August", "20");

function exam(arg1, arg2, arg3, arg4) {
    let examHour = Number(arg1);
    let examMinute = Number(arg2);
    let arriveHour = Number(arg3);
    let arriveMinute = Number(arg4);
    let hour;
    let minute;

    if(arriveHour == examHour) {
        if(arriveMinute == examMinute) {
            console.log(`On time`);
        } else if(arriveMinute > examMinute) {
            minute = arriveMinute - examMinute;
            console.log(`Late`);
            console.log(`${minute} minutes after the start`);
        } else if(arriveMinute < examMinute) {
            minute = examMinute - arriveMinute;
            console.log(`On time`);
            console.log(`${minute} minutes before the start`);
        }
    } else if(arriveHour > examHour) {
        if(arriveMinute == examMinute) {
            minute = arriveMinute + examMinute;
            minute = minute % 60;
            hour = arriveHour - examHour;
            console.log(`Late`);
            console.log(`${hour}:00 hours after the start`);
        } else if(arriveMinute > examMinute) {
            minute = arriveMinute + examMinute;
            minute = minute % 60;
            hour = arriveHour - examHour;
            console.log(`Late`);
            console.log(`${hour}:${minute} hours after the start`);
        } else if(arriveMinute < examMinute) {
            minute = examMinute + arriveMinute;
            console.log(`Late`);
            console.log(`${minute} minutes after the start`);
        }
    } else if(arriveHour < examHour) {
        if(arriveMinute > examMinute) {
            minute = (60 -  arriveMinute) + examMinute;
            if(minute <= 30) {
                console.log(`On time`);
                console.log(`${minute} minutes before the start`);
            } else {
                console.log(`Early`);
                console.log(`${minute} minutes before the start`);
            }
        } if(arriveMinute <= examMinute) {
            minute = (60 - arriveMinute) + examMinute;
            hour = arriveHour - examHour;
            minute = minute % 60;
            if(minute < 10) {
                console.log(`Early`);
                console.log(`${Math.abs(hour)}:0${minute} hours before the start`);
            } else {
                console.log(`Early`);
                console.log(`${Math.abs(hour)}:${minute} hours before the start`);
            }
        }
    }
}

//exam("11", "30", "10", "20");

function vBall(year, holidays, weekends) {
    holidays = Number(holidays)
    weekends = Number(weekends);
    let gamesInWeekend = (48 - weekends) * (3.0 / 4);
    let gamesInHolidays = holidays * (2.0 / 3);
    let allGames = weekends + gamesInWeekend + gamesInHolidays;

    if(year == "leap") {
        allGames = allGames + (allGames * 0.15);
    }

    console.log(Math.floor(allGames));
}

//vBall("normal", "6", "13");

function exam1(arg1, arg2, arg3, arg4) {
    let examHour = Number(arg1);
    let examMinute = Number(arg2);
    let arriveHour = Number(arg3);
    let arriveMinute = Number(arg4);
    let totalExamMinutes = examHour * 60 + examMinute;
    let totalArriveMinutes = arriveHour * 60 + arriveMinute;
    let diff = totalExamMinutes - totalArriveMinutes;
    let hours = Math.floor(Math.abs(diff) / 60);
    let minutes = Math.abs(diff) % 60;

    if(diff < 0) {
        
        console.log(`Late`);

        if(hours > 0) {

            if(minutes < 10) {
                minutes = `${0}${minutes}`;
            }

            console.log(`${hours}:${minutes} hours after the start`);
        } else {
            
            console.log(`${minutes} minutes after the start`);
        }

    } else if (diff <= 30) {
        
        console.log(`On time`);

        if(diff !== 0) {

            console.log(`${minutes} minutes before the start`)
        }

    } else {
        
        console.log(`Early`);

        if(hours > 0) {

            if(minutes < 10) {
                minutes = `${0}${minutes}`;
            }

            console.log(`${hours}:${minutes} hours before the start`);
        } else {
            
            console.log(`${minutes} minutes before the start`);
        }
    }
}

//exam1("11", "30", "12", "29");








