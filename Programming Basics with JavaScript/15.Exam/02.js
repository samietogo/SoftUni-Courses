function catShirt(arg1, arg2, arg3, arg4) {
    let sleeve = Number(arg1);
    let face = Number(arg2);
    let cloth = arg3;
    let tie = arg4;
    let price = 0;

    if(cloth == "Linen") {
        price = 15;
    } else if(cloth == "Cotton") {
        price = 12;
    } else if(cloth == "Denim") {
        price = 20;
    }else if(cloth == "Twill") {
        price = 16;
    } else {
        price = 11;
    }
    let size = sleeve * 2 + face * 2;
    size += size * 0.1;
    size /= 100;
    price *= size;
    price += 10;

    if(tie == "Yes") {
        price += price * 0.2;
    }

    console.log(`The price of the shirt is: ${price.toFixed(2)}lv.`);

}

catShirt("30",
    "50",
    "Cotton",
    "Yes"
    )