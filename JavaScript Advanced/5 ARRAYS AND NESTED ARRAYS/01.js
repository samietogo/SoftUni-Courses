// Even Position Element
function solve(arr) {
    let result = "";
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if(i % 2 == 0) {
            result += current + " ";
        }
    }
    return result;
}

console.log(solve(['20', '30', '40', '50', '60']));
console.log(solve(['5', '10']));