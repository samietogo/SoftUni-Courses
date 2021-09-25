function biggerHalf(arr) {
    const sorted = arr.sort((a, b) => a - b);
    let count = 0;
    let divider = 0;
    for (let i = 1; i <= sorted.length; i++) {
        count++;
    }
    if (count % 2 == 0) {
        divider = count / 2;
    } else {
        divider = Math.floor(count / 2);
    }

    return sorted.slice(divider);
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));


// function biggerHalf(arr) {
//     return arr.sort((a, b) => a - b).slice(arr.length / 2);
// }

// console.log(biggerHalf([4, 7, 2, 5]));
// console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));