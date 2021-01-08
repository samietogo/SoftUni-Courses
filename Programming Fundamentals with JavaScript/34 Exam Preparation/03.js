function pirates(arr) {
    let targets = {};
    while ((command = arr.shift()) != 'Sail') {
        let [town, population, gold] = command.split('||');
        if (targets.hasOwnProperty(town)) {
            targets[town]['population'] += Number(population);
            targets[town]['gold'] += Number(gold);
        } else {
            targets[town] = {
                population: Number(population),
                gold: Number(gold)
            };
        }

    }
    while ((command = arr.shift()) != 'End') {
        let [action, ...tokens] = command.split('=>');
        if (action == 'Plunder') {
            targets[tokens[0]]['population'] -= Number(tokens[1]);
            targets[tokens[0]]['gold'] -= Number(tokens[2]);
            console.log(`${tokens[0]} plundered! ${tokens[2]} gold stolen, ${tokens[1]} citizens killed.`);
            if (targets[tokens[0]]['population'] == 0 || targets[tokens[0]]['gold'] == 0) {
                delete targets[tokens[0]];
                console.log(`${tokens[0]} has been wiped off the map!`);
            }
        } else if (action == 'Prosper') {
            if (tokens[1] < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                targets[tokens[0]]['gold'] += Number(tokens[1]);
                console.log(`${tokens[1]} gold added to the city treasury. ${tokens[0]} now has ${targets[tokens[0]]['gold']} gold.`);
            }
        }
    }
    if (Object.keys(targets).length == 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${Object.keys(targets).length} wealthy settlements to go to:`);
        let sorted = Object.entries(targets).sort((a, b) => b[1].gold - a[1].gold || a[0].localeCompare(b[0]));
        for (let line of sorted) {
            console.log(`${line[0]} -> Population: ${line[1]['population']} citizens, Gold: ${line[1]['gold']} kg`);
        }
    }
}

pirates([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
]);
// pirates([
//     'Tortuga||345000||1250',
//     'Santo Domingo||240000||630',
//     'Havana||410000||1100',
//     'Sail',
//     'Plunder=>Tortuga=>75000=>380',
//     'Prosper=>Santo Domingo=>180',
//     'End'
// ]);