function squareOfStars(a) {
    if (a == undefined) {
        a = 5;
    }
    let col = '';
    let row = '';
    for (let i = 0; i < a; i++) {
        row += '* ';
    }
    for (let j = 0; j < a; j++) {
        col += row + '\n';
    }
    return col;
}

console.log(squareOfStars());