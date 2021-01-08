function convert(usd) {
    let bgl = Number(usd) * 1.79549;

    console.log(bgl);
}

// convert("10");

function radiansToDegrees(radians) {
    let degrees = Number(radians) * 180 / Math.PI;

    console.log(degrees.toFixed(0));
}

// radiansToDegrees("22");

function calc(depozit, srok, glp) {
    depozit = Number(depozit);
    srok = Number(srok);
    glp = Number(glp);
    let lihvaZaGodina = depozit * glp / 100;
    let lihvaZaMesec = lihvaZaGodina / 12;
    let suma = (lihvaZaMesec * srok) + depozit;

    console.log(suma);
}

// calc("200","3","5.7");

function calcHours(pages, pagesPerHour, days) {
    let bookTime = Number(pages) / Number(pagesPerHour);
    let result = bookTime / Number(days);

    console.log(result);
}

//calcHours("432", "15", "4");

function budget(rent) {
    rent = Number(rent);
    let cake = rent * 20 / 100;
    let drinks = cake - (cake * 45 /100);
    let animator = rent / 3;
    let sum = rent + cake + drinks + animator;
    
    console.log(sum);
}

//budget("2250");

function calcSum(campaignLenght, numberOfConfectioners, numberOfCakes, numberOfWaffles, numberOfPancakes) {
    campaignLenght = Number(campaignLenght);
    numberOfConfectioners = Number(numberOfConfectioners);
    numberOfCakes = Number(numberOfCakes);
    numberOfWaffles = Number(numberOfWaffles);
    numberOfPancakes = Number(numberOfPancakes);
    let cake = 45;
    let waffle = 5.80;
    let pancake = 3.20;
    let sumFromOneDay = ((cake * numberOfCakes) + (waffle * numberOfWaffles) + (pancake * numberOfPancakes)) * numberOfConfectioners;
    let sumFromAllCampaign = sumFromOneDay * campaignLenght;
    let sumWithoutCosts = sumFromAllCampaign - (sumFromAllCampaign / 8);

    console.log(sumWithoutCosts.toFixed(2));
}

//calcSum("131", "5", "9", "33", "46");

function total(strawberriesPrice, bananas, oranges, raspberries, strawberries) {
    strawberriesPrice = Number(strawberriesPrice);
    bananas = Number(bananas);
    oranges = Number(oranges);
    raspberries = Number(raspberries);
    strawberries = Number(strawberries);
    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.4);
    let bananasPrice = raspberriesPrice - (raspberriesPrice * 0.8);
    let raspberriesSum = raspberries * raspberriesPrice;
    let orangesSum = oranges * orangesPrice;
    let bananasSum = bananas * bananasPrice;
    let strawberriesSum = strawberries * strawberriesPrice;
    let totalPrice = raspberriesSum + orangesSum + bananasSum + strawberriesSum;

    console.log(totalPrice.toFixed(2));
}

//total("48","10","3.3","6.5","1.7");

function amountOfWater(d, sh, v, percent) {
    d = Number(d);
    sh = Number(sh);
    v = Number(v);
    percent = Number(percent);
    let volumeOfTheAquarium = d * sh * v;
    let allVolumeOfWater = volumeOfTheAquarium * 0.001;
    percent = percent * 0.01;
    let water = allVolumeOfWater * (1 - percent);

    console.log(water);
}

amountOfWater("85","75","47","17");
