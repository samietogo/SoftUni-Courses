// Town Population
function solve(arr) {
    let town = {};
    for (let line of arr) {
        let [name, population] = line.split(' <-> ');
        population = Number(population);
        if (town.hasOwnProperty(name)) {
            town[name] += population;
        } else {
            town[name] = population;
        }
    }
    let entries = Object.entries(town);
    for (let [key, value] of entries) {
        console.log(`${key} : ${value}`)
    }
}

// console.log(solve([
//     'Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']));
// console.log(solve([
//     'Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000']));
solve([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);