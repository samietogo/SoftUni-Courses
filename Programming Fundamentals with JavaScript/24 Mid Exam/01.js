function coffeeShop(inputArr) {
    let orders = inputArr.shift();
    let result = 0;
    for (let i = 0; i < inputArr.length; i += 3) {
        let price = inputArr[i];
        let days = inputArr[i + 1];
        let capsules = inputArr[i + 2];
        let sum = (days * capsules) * price;
        result += sum;
        console.log(`The price for the coffee is: $${sum.toFixed(2)}`);
    }
    console.log(`Total: $${result.toFixed(2)}`);
}

// coffeeShop([1, 1.53, 30, 8]);
// coffeeShop([2, 4.99, 31, 3, 0.35, 31, 5]);

function coffeeShop(inputArr) {
    let orders = inputArr.shift();
    let result = 0;
    let i = 0;
    let price = inputArr[i];
    let days = inputArr[i + 1];
    let capsules = inputArr[i + 2];

    while (orders != 0) {
        let sum = (days * capsules) * price;
        result += sum;
        console.log(`The price for the coffee is: $${sum.toFixed(2)}`);
        i += 3
        price = inputArr[i];
        days = inputArr[i + 1];
        capsules = inputArr[i + 2];
        orders--;
    }

    // for(let i = 0; i < inputArr.length; i += 3) {
    //     let price = inputArr[i];
    //     let days = inputArr[i + 1];
    //     let capsules = inputArr[i + 2];
    //     let sum = (days * capsules) * price;
    //     result += sum;
    //     console.log(`The price for the coffee is: $${sum.toFixed(2)}`);
    // }
    console.log(`Total: $${result.toFixed(2)}`);
}

coffeeShop([1, 1.53, 30, 8]);
coffeeShop([2, 4.99, 31, 3, 0.35, 31, 5]);
