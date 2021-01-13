// Time to Walk
function solve(steps, length, speedKmH) {
    let speed = speedKmH * 1000 / 3600;
    let distance = steps * length;

    let rest = Math.floor(distance / 500) * 60;
    let time = distance / speed + rest;

    let hours = Math.floor(time / 60 / 60).toFixed(0).padStart(2, '0');
    let minutes = Math.floor((time - hours * 3600) / 60).toFixed(0).padStart(2, '0');
    let seconds = (time - hours * 60 * 60 - minutes * 60).toFixed(0).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

console.log(solve(4000, 0.60, 5));
console.log(solve(2564, 0.70, 5.5));