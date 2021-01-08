function solve(arr) {
    let guests = {};
    let counter = 0;
    while ((command = arr.shift()) != 'Stop') {
        let [review, name, meal] = command.split('-');
        if (review == 'Like') {
            if (!guests.hasOwnProperty(name)) {
                guests[name] = [];
                guests[name].push(meal);
            } else {
                let have = false;
                for (let i = 0; i < guests[name].length; i++) {
                    if (guests[name][i] == meal) {
                        have = true;
                    }
                }
                if (!have) {
                    guests[name].push(meal);
                }
            }
        } else {
            if(!guests.hasOwnProperty(name)) {
                console.log(`${name} is not at the party.`);
            } else {
                let have = false;
                let index = 0;
                for (let i = 0; i < guests[name].length; i++) {
                    if (guests[name][i] == meal) {
                        index = i;
                        have = true;
                    }
                }
                if(have) {
                    guests[name].splice(index, 1);
                    counter++;
                    console.log(`${name} doesn't like the ${meal}.`);
                } else {
                    console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                }
            }
        }
    }
    let sorted = Object.entries(guests).sort(([a,b], [aa,bb]) => bb.length - b.length || a.localeCompare(aa));
    for(let line of sorted) {
        console.log(`${line[0]}: ${line[1].join(', ')}`);
    }
    console.log(`Unliked meals: ${counter}`);
}

solve([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Penelope-dessert',
    'Stop'
]);
// solve([
//     'Like-Krisi-shrimps',
//     'Unlike-Vili-carp',
//     'Unlike-Krisi-salad',
//     'Unlike-Krisi-shrimps',
//     'Stop'
// ]);
// solve([
//     'Like-Mike-frenchFries',
//     'Like-Mike-salad',
//     'Like-George-fruit',
//     'Like-Steven-salad',
//     'Unlike-Steven-salad',
//     'Unlike-Steven-fruit',
//     'Stop'
// ]);