function sumNumbers(a, b) {
    let result = 0;
    for (let i = Number(a); i <= Number(b); i++) {
        result += i;
    }

    return result;
}

console.log(sumNumbers('-8', '20'));