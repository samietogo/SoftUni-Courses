function sortArrayByTwoCriteria(arr) {
    return arr
    .sort((a, b) => a.length - b.length  || a.localeCompare(b))
    .join('\n');
}

console.log(sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']));
console.log(sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sortArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']));