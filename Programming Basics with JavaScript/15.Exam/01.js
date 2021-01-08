function cat(arg1, arg2) {
    let bedPrice = Number(arg1);
    let litter = Number(arg2);
    let food = litter * 1.25;
    let toys = food * 0.5;
    let vet = toys * 1.1;
    let costs = litter + food + toys + vet;
    let specialCosts = costs * 0.05;
    let allCost = bedPrice + (12 * costs) + (12 * specialCosts);

    console.log(`${allCost.toFixed(2)} lv.`);

}

cat("12.5",
    "16"
    )