// Piece of Pie
function solve(arr, start, end) {
    let startIndex = arr.indexOf(start);
    let endIndex = arr.indexOf(end);
    let result = [];
    for (let i = startIndex; i <= endIndex; i++) {
        result.push(arr[i]);
    }
    return result;
}

console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
console.log(solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'

));