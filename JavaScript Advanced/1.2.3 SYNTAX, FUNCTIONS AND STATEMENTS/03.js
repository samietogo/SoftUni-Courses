// Largest Number
function solve(num1, num2, num3) {
    let arr = [num1, num2, num3];
    let largest = Number.MIN_SAFE_INTEGER;
    for(let line of arr) {
        if(line > largest) {
            largest = line;
        }
    }
    console.log(`The largest number is ${largest}.`);
}

// solve(5, -3, 16);

function solve2(num1, num2, num3) {
    let largest = Math.max(num1, num2, num3)
    console.log(`The largest number is ${largest}.`);
}

solve2(5, -3, 16);