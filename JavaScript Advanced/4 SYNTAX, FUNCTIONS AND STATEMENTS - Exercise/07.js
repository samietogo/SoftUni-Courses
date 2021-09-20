function cookingByNumbers (n, a, b, c, d, e) {
    n = Number(n);
    let arr = [a, b, c, d, e];
    let result = [];
    for (let line of arr) {
        if (line == 'chop') {
            n = n / 2;
        } else if (line == 'dice') {
            n = Math.sqrt(n);
        } else if (line == 'spice') {
            n += 1;
        } else if (line == 'bake') {
            n *= 3;
        } else if (line == 'fillet') {
            n *= 0.8;
        }
        result.push(n);
    }

    return result.join('\n');
}

console.log(cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop'));
console.log(cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));