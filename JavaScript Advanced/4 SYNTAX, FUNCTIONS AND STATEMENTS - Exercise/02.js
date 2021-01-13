// Greatest Common Divisor - GCD
function solve(num1, num2) {
    let divider = 0;
    for(let i = 1; i <= num2; i++) {
        if(num1 % i == 0 && num2 % i == 0) {
            divider = i;
        }
    }
    return divider;
}

console.log(solve(15, 5));
console.log(solve(2154, 458));