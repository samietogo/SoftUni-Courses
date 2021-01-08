function safari(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let fuelNeeded = Number(arg2);
    let day = arg3;
    let fuelPrice = fuelNeeded * 2.10;
    let price = fuelPrice + 100;

    if(day == "Sunday") {
        price -= price * 0.2;
    } else {
        price -= price * 0.1;
    }


    if(budget < price) {
        price -= budget;
        console.log(`Not enough money! Money needed: ${Math.abs(price).toFixed(2)} lv.`);
    } else {
        budget -= price;
        console.log(`Safari time! Money left: ${budget.toFixed(2)} lv.`);
    }

}

//safari("105.2", "15", "Sunday");

function catWalking(arg1, arg2, arg3) {
    let minutes = Number(arg1);
    let count = Number(arg2);
    let calories = Number(arg3);
    minutes *= count;
    let caloriesBurn = minutes * 5;

    if(caloriesBurn >= calories / 2) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurn}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurn}.`);
    }

}

//catWalking("15", "2", "500");

function mountainRun(arg1, arg2, arg3) {
    let record = Number(arg1);
    let distance = Number(arg2);
    let secondsPerMeter = Number(arg3);
    let goal = distance * secondsPerMeter;
    let delay = Math.floor(distance / 50) * 30;
    goal += delay;

    if(goal < record) {
        console.log(`Yes! The new record is ${goal.toFixed(2)} seconds.`);
    } else {
        goal -= record;
        console.log(`No! He was ${goal.toFixed(2)} seconds slower.`);
    }
}


mountainRun("1377", "389", "3");