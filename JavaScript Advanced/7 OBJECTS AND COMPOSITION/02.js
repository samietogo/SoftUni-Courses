function townPopulation(arr) {
    const town = {};
    for (let line of arr) {
        let [name, population] = line.split(' <-> ');
        if (town[name] == undefined) {
            town[name] = Number(population);
        } else {
            town[name] += Number(population);
        }
    }

    for (let [name, population] of Object.entries(town)) {
        console.log(`${name} : ${population}`);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);