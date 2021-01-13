// Same Numbers
function solve(num) {
    numStr = num.toString();
    let sum = 0;
    let isEqual = true;
    for(let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]);
        if(numStr[i] != numStr[i + 1] && numStr[i + 1] != undefined) {
            isEqual = false;
        }
    }
    if(isEqual) {
        return 'true' + '\n' + sum;
    } else {
        return 'false' + '\n' + sum;
    }
}

console.log(solve(2222222));
console.log(solve(1234));