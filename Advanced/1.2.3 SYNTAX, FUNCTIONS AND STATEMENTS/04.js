// Circle Area
function solve(arg) {
    if(typeof(arg) != "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(arg)}.`);
    } else {
        console.log((Math.PI * Math.pow(arg, 2)).toFixed(2));
    }
}
solve(5);