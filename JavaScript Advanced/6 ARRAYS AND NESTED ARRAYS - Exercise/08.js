// Sort an Array by 2 Criteria
function solve(arr) {
    let sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    return sorted.join('\n');
}

console.log(solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
));