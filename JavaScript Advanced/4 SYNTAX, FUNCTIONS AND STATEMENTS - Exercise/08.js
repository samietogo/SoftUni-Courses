function solve(str) {
    let words = [];
    let pattern = /[\w]{1,}/g;
    while ((word = pattern.exec(str)) != null) {
        words.push(word[0]);
    }
    return words.join(', ').toUpperCase();
}

console.log(solve('Hi, how are you?'));
console.log(solve('hello'));