// Road Radar
function solve(speed, area) {
    let limit = 0;
    let status;
    switch (area) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;
    }
    if (speed <= limit) {
        return `Driving ${speed} km/h in a ${limit} zone`;
    } else {
        if (speed <= limit + 20) {
            status = 'speeding';
        } else if (speed <= limit + 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        return `The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`
    }
}

console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));