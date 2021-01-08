function touristShop(input) {
    let budget = input[0];
    let i = 1;
    let productCount = 0;
    let currentPrice = 0;
    let command = input[i];
    let noMoney = false;

    while(command !== "Stop") {
        productCount++;
        i++;
        let price = Number(input[i]);
        if(productCount % 3 == 0) {
            price *= 0.5;
        }
        currentPrice += price;
        i++;
        budget -= price;
        if(budget < 0) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${Math.abs(budget.toFixed(2))} leva!`);
            noMoney = true;
            break;
        }
        command = input[i];
    }

    if(noMoney == false) {
        console.log(`You bought ${productCount} products for ${currentPrice.toFixed(2)} leva.`);
    }

}

// touristShop(["153.20",
//     "Backpack",
//     "25.20",
//     "Shoes",
//     "54",
//     "Sunglasses",
//     "30",
//     "Stop"
//     ])

// touristShop(["54",
//     "Thermal underwear",
//     "24",
//     "Sunscreen",
//     "45"
//     ])

function petFood(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    let daysCount = 2;
    let foodDog = 0;
    let foodCat = 0;
    let tempDogFood = 0;
    let tempCatFood = 0;
    let tempCookies = 0;
    let cookies = 0;

    for(let i = 1; i <= days; i++) {
        foodDog = Number(input[daysCount]);
        foodCat = Number(input[daysCount + 1]);
        daysCount += 2;
        tempDogFood += foodDog;
        tempCatFood += foodCat;

        if(i % 3 == 0) {
            tempCookies = (foodDog + foodCat) * 0.1;
        }

        cookies += tempCookies;
        tempCookies = 0;
    }

    let allEatenFood = tempDogFood + tempCatFood;
    let eatenDogPercent = tempDogFood / allEatenFood * 100;
    let eatenCatPercent = tempCatFood / allEatenFood * 100;
    let eatenFoodPercent = ((tempDogFood + tempCatFood) / food) * 100;

    console.log(`Total eaten biscuits: ${Math.round(cookies)}gr.`);
    console.log(`${eatenFoodPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${eatenDogPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${eatenCatPercent.toFixed(2)}% eaten from the cat.`);

}

// petFood(["3",
//     "1000",
//     "300",
//     "20",
//     "100",
//     "30",
//     "110",
//     "40"
//     ])

function treckingMania(input) {
    let groups = Number(input[0]);
    let i = 1;
    let people = Number(input[i]);
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    while(i <= groups) {

        if(people <= 5) {
            musala += people;
        } else if(people > 5 && people <= 12) {
            monblan += people;
        } else if(people > 12 && people <= 25) {
            kilimanjaro += people;
        } else if(people > 25 && people <= 40) {
            k2 += people;
        } else {
            everest += people;
        }
        
        i++;
        people = Number(input[i]);
    }

    let allPeople = musala + monblan + kilimanjaro + k2 + everest;

    console.log((musala / allPeople * 100).toFixed(2) + "%");
    console.log((monblan / allPeople * 100).toFixed(2) + "%");
    console.log((kilimanjaro / allPeople * 100).toFixed(2) + "%");
    console.log((k2 / allPeople * 100).toFixed(2) + "%");
    console.log((everest / allPeople * 100).toFixed(2) + "%");

}

treckingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"
    ])