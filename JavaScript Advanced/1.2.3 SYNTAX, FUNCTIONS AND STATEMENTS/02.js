function calcLength(a, b, c) {
    let sum = a.length + b.length + c.length;
    let average = Math.floor(sum / 3);
    return sum + "\n" + average;
}

console.log(calcLength('chocolate', 'ice cream', 'cake'));