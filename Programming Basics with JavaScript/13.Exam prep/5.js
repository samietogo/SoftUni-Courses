function divideWithoutRem(input) {
    let i = 0;
    let amount = Number(input[i]);
    i++;
    let number = Number(input[i]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    while(i <= amount) {

        if(number % 2 == 0) {
            p1++;
        }
        if(number % 3 == 0) {
            p2++;
        }
        if(number % 4 == 0) {
            p3++;
        }
        i++;
        number = Number(input[i]);
    }

    console.log(`${(p1 / amount * 100).toFixed(2)}%`);
    console.log(`${(p2 / amount * 100).toFixed(2)}%`);
    console.log(`${(p3 / amount * 100).toFixed(2)}%`);

}

// divideWithoutRem(["10",
//     "680",
//     "2",
//     "600",
//     "200",
//     "800",
//     "799",
//     "199",
//     "46",
//     "128",
//     "65"
//     ])

function careOfPuppy(input) {
    let allFood = Number(input[0]) * 1000;
    let i = 1;
    let command = input[i];
    let foodCount = 0;

    while(command !== "Adopted") {
        command = Number(input[i]);
        foodCount += command;
        i++;
        command = input[i];
    }

    if(foodCount <= allFood) {
        console.log(`Food is enough! Leftovers: ${allFood - foodCount} grams.`);
    } else {
        console.log(`Food is not enough. You need ${foodCount - allFood} grams more.`);
    }

}

// careOfPuppy(["4",
//     "130",
//     "345",
//     "400",
//     "180",
//     "230",
//     "120",
//     "Adopted"
//     ])

function luggageLoad(input) {
    let volume = Number(input[0]);
    let i = 1;
    let command = Number(input[i]);
    let count = 0;
    let moreSpace = true;

    while(command !== "End") {
        command = Number(input[i]);

        if(i % 3 == 0) {
            command += command * 0.1;
        }
        if(command > volume) {
            console.log(`No more space!`);
            moreSpace = false;
            break;
        }
        volume -= command;
        count++;
        i++;
        command = input[i];
    }

    if(moreSpace) {
        console.log(`Congratulations! All suitcases are loaded!`);
    }

    console.log(`Statistic: ${count} suitcases loaded.`);

}

luggageLoad(["1200.2",
    "260",
    "380.5",
    "125.6",
    "305",
    "End"
    ])