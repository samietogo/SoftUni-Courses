function luggage(arg1, arg2, arg3, arg4) {
    let priceOver20 = Number(arg1);
    let weigth = Number(arg2);
    let daysBeforeTrip = Number(arg3);
    let luggageCount = Number(arg4);
    let price = 0;

    if(weigth < 10) {
        price = priceOver20 * 0.2;
    } else if(weigth >= 10 && weigth <= 20) {
        price = priceOver20 * 0.5;
    } else {
        price = priceOver20;
    }

    if(daysBeforeTrip > 30) {
        price += price * 0.1;
    } else if (daysBeforeTrip <= 30 && daysBeforeTrip >= 7) {
        price += price * 0.15;
    } else {
        price += price * 0.4;
    }

    price *= luggageCount; 

    console.log(`The total price of bags is: ${price.toFixed(2)} lv.`)
}

luggage("63.80",
    "23",
    "3",
    "1"
    )