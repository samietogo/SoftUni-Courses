function rotateArray(arr, turn) {
    for (let i = turn; i > 0; i--) {
        let a = arr.pop();
        arr.unshift(a);
    }

    return arr.join(' ');
}

console.log(rotateArray(['1', '2', '3', '4'], 2));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15));