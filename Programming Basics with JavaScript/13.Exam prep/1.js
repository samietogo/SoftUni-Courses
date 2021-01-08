function food(arg1, arg2, arg3) {
    let chicken = arg1;
    let fish = arg2;
    let veg = arg3;
    let chickenPrise = chicken * 10.35;
    let fishPrise = fish * 12.40;
    let vegPrise = veg * 8.15;
    let price = chickenPrise + fishPrise + vegPrise;
    let desert = price * 0.2;

    price += desert + 2.50;

    console.log(`Total: ${price.toFixed(2)}`);


}

//food("10", "0", "6");

function change(arg1, arg2, arg3) {
    let countBitcoins = Number(arg1);
    let countChina = Number(arg2);
    let commision = Number(arg3);
    
    let bitcoins = countBitcoins * 1168;
    let china = (countChina * 0.15) * 1.76;
    let sum = bitcoins + china;
    sum /= 1.95;
    commision /= 100;
    sum -= sum * commision;


    console.log(sum.toFixed(2));

}

//change("20", "5678", "2.4");

function learning(arg1, arg2, arg3, arg4) {
    let penCount = Number(arg1);
    let markerCount = Number(arg2);
    let alchemy = Number(arg3);
    let discount = Number(arg4);

    let penPrice = penCount * 5.80;
    let markerPrice = markerCount * 7.20;
    let alchemyPrice = alchemy * 1.20;
    let price = penPrice + markerPrice + alchemyPrice;
    discount /= 100;
    price -= price * discount;

    console.log(price.toFixed(3));

}

learning("2","3","2.5","25");