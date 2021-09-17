function fruit(f, w, p) {
    let money = w / 1000 * p;
    return `I need $${money.toFixed(2)} to buy ${(w / 1000).toFixed(2)} kilograms ${f}.`;
}

console.log(fruit('orange', 2500, 1.80));