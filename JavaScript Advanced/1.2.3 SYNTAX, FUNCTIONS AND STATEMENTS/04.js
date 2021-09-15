function circleArea(a) {
    let type = typeof(a);
    let result;
    if (type == 'number') {
        result = (Math.PI * Math.pow(a, 2)).toFixed(2);
    } else {
        result = `We can not calculate the circle area, because we receive a ${type}.`;
    }

    return result;
}

console.log(circleArea(5));