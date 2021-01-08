function words(input) {
    let wantedArr = input.shift().split(' ');
    let wanted = new Map();
    let count = 0;
    for (let word of wantedArr) {
        wanted.set(word, count);
        for (let line of input) {
            if (line == word) {
                current = wanted.get(word);
                wanted.set(word, current + 1);
            }
        }
    }
    let sorted = Array.from(wanted).sort(([a, aa], [b, bb]) => bb - aa);
    for (let line of sorted) {
        console.log(`${line[0]} - ${line[1]}`);
    }
}

// words([
//     'this sentence', 'In', 'this', 'sentence', 'you',
//     'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
//     'words', 'this', 'and', 'sentence', 'because', 'this',
//     'is', 'your', 'task'
// ]);

function words2(input) {
    let wantedArr = input.shift().split(' ');
    let wanted = {};
    for (let word of wantedArr) {
        wanted[word] = 0;
    }
    for (let word of input) {
        if (wanted.hasOwnProperty(word)) {
            wanted[word]++;
        }
    }
    Object.keys(wanted)
        .sort((a, b) => wanted[b] - wanted[a])
        .forEach(line => {
            console.log(`${line} - ${wanted[line]}`);
        });
}

// words2([
//     'this sentence', 'In', 'this', 'sentence', 'you',
//     'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
//     'words', 'this', 'and', 'sentence', 'because', 'this',
//     'is', 'your', 'task'
// ]);

function oddOcc(str) {
    let arr = str.split(' ');
    let occurrences = new Map();
    for (let line of arr) {
        let current = line.toLowerCase();
        if (occurrences.has(current)) {
            let property = occurrences.get(current) + 1;
            occurrences.set(current, property);
        } else {
            occurrences.set(current, 1);
        }
    }
    let result = [];
    for (let line of occurrences) {
        if (line[1] % 2 != 0) {
            result.push(line[0]);
        }
    }
    console.log(result.join(' '));
}

// oddOcc('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

function oddOcc2(str) {
    let arr = str.split(' ');
    let occurrences = new Map();
    for (let line of arr) {
        let current = line.toLowerCase();
        if (!occurrences.has(current)) {
            occurrences.set(current, 0);
        }
        occurrences.set(current, occurrences.get(current) + 1);

    }
    let result = Array.from(occurrences.keys())
        .filter(x => occurrences.get(x) % 2 != 0);
    console.log(result.join(' '));
}

// oddOcc2('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

function piccolo(arr) {
    let parking = {};
    for (let line of arr) {
        let [command, carNum] = line.split(', ');
        if (command == 'IN') {
            parking[carNum] = command;
        } else {
            delete parking[carNum];
        }
    }
    if (Object.keys(parking).length == 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        let result = Object.entries(parking).sort(([a, aa], [b, bb]) => a.localeCompare(b));
        for (let line of result) {
            console.log(`${line[0]}`);
        }
    }
}

// piccolo(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'IN, CA9999TT',
// 'IN, CA2866HI',
// 'OUT, CA1234TA',
// 'IN, CA2844AA',
// 'OUT, CA2866HI',
// 'IN, CA9876HH',
// 'IN, CA2822UU']);

function partyTime(input) {
    let list = {
        'regular': [],
        'vip': []
    };
    let command = input.shift();
    while (command != 'PARTY') {
        if (isNaN(command[0])) {
            list['regular'].push(command);
        } else {
            list['vip'].push(command);
        }
        command = input.shift();
    }
    for (let line of input) {
        if (list['vip'].includes(line)) {
            let index = list['vip'].indexOf(line);
            list['vip'].splice(index, 1);
        } else {
            let index = list['regular'].indexOf(line);
            list['regular'].splice(index, 1);
        }
    }
    console.log(`${list['vip'].length + list['regular'].length}`);
    console.log(list['vip'].join('\n') + '\n' + list['regular'].join('\n'));
}

// partyTime(['7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc'
// ]);

function cardGame(arr) {
    let list = {};
    for (let line of arr) {
        let [name, cards] = line.split(': ');
        let currentDeck = cards.split(', ');
        if (!list.hasOwnProperty(name)) {
            list[name] = [];
            for (let element of currentDeck) {
                if (!list[name].includes(element)) {
                    list[name].push(element);
                }
            }
        } else {
            for (let element of currentDeck) {
                if (!list[name].includes(element)) {
                    list[name].push(element);
                }
            }
        }
    }
    for (let line in list) {
        let sum = 0;
        let currentArr = list[line];
        for (let el of currentArr) {
            sum += values(el);
        }
        console.log(`${line}: ${sum}`);
    }
    function values(str) {
        let y = str[str.length - 1];
        let x = 0;
        if (str.length == 2) {
            x = str[0];
            switch (x) {
                case '2': x = 2; break;
                case '3': x = 3; break;
                case '4': x = 4; break;
                case '5': x = 5; break;
                case '6': x = 6; break;
                case '7': x = 7; break;
                case '8': x = 8; break;
                case '9': x = 9; break;
                case 'J': x = 11; break;
                case 'Q': x = 12; break;
                case 'K': x = 13; break;
                case 'A': x = 14; break;
            }
        } else {
            x = 10;
        }
        switch (y) {
            case 'S': y = 4; break;
            case 'H': y = 3; break;
            case 'D': y = 2; break;
            case 'C': y = 1; break;
        }
        return x * y;
    }
}

// cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ]);

function travelTime(arr) {
    let journeys = {};
    for (let line of arr) {
        let [country, town, cost] = line.split(' > ');
        cost = Number(cost);
        let currentTown = '';
        if (!journeys.hasOwnProperty(country)) {
            let objectValue = [];
            objectValue.push([town, cost])
            journeys[country] = objectValue;
        } else {
            let setValueArr = journeys[country];
            let isNew = true;
            for (let tuple of setValueArr) {
                let setTown = tuple[0];
                let setCost = tuple[1];
                currentTown = setTown;
                if (setTown == town && setCost > cost) {
                    tuple[1] = cost;
                    isNew = false;
                    break;
                }
            }
            if (isNew && currentTown != town) {
                setValueArr.push([town, cost])
            }
        }
    }
    let sortedKeys = Object.keys(journeys).sort((a, b) => a.localeCompare(b));
    for (let line of sortedKeys) {
        let sortedTuples = journeys[line].sort(([a, aa], [b, bb]) => aa - bb).join(' ');
        let print = sortedTuples.split(',').join(' -> ');
        console.log(`${line} -> ${print}`);
    }
}

// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
// ]);

function companyUsers(arr) {
    let companyes = {};
    for (let line of arr) {
        let [company, user] = line.split(' -> ');
        if (!companyes.hasOwnProperty(company)) {
            companyes[company] = [];
            companyes[company].push(user);
        } else {
            let newUser = true;
            for (let line of companyes[company]) {
                if (line == user) {
                    newUser = false;
                }
            }
            if (newUser) {
                companyes[company].push(user);
            }
        }
    }
    let sortedCompanies = Object.keys(companyes).sort((a, b) => a.localeCompare(b));
    for (let line of sortedCompanies) {
        let print = companyes[line].map((a) => '-- ' + a).join('\n');
        console.log(line + '\n' + print);
    }
}

// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> CC12344',
//     'Lenovo -> XX23456',
//     'SoftUni -> AA12345',
//     'Movement -> DD11111'
// ]);

function minerTask(arr) {
    let mine = {};
    for (let i = 0; i < arr.length; i += 2) {
        let currentItem = arr[i];
        let currentCol = Number(arr[i + 1]);
        if (!mine.hasOwnProperty(currentItem)) {
            mine[currentItem] = currentCol;
        } else {
            mine[currentItem] += currentCol;
        }
    }
    for (let line of Object.keys(mine)) {
        console.log(`${line} -> ${mine[line]}`);
    }
}

// minerTask([
//     'gold',
//     '155',
//     'silver',
//     '10',
//     'copper',
//     '17',
//     'gold',
//     '15'
// ]);

function arenaTier(arr) {
    let pool = {};
    let allSkills = 0;
    let i = 0;
    let input = arr[i];
    while (input != 'Ave Cesar') {
        if (!input.includes('vs')) {
            let [name, technique, skill] = input.split(' -> ');
            skill = Number(skill);
            let currentValue = [];
            if (!pool.hasOwnProperty(name)) {
                currentValue.push([technique, skill]);
                allSkills = 0;
                allSkills += skill;
                currentValue.push(allSkills);
                pool[name] = currentValue;
            } else {
                let newTechnique = true;
                for (let entrie of pool[name]) {
                    if (entrie.includes(technique)) {
                        if (entrie[1] < skill) {
                            entrie[1] = skill;
                            let lastSkill = pool[name].pop();
                            newTechnique = false;
                            break;
                        }
                        newTechnique = false;
                    }
                }
                if (newTechnique) {
                    pool[name].push([technique, skill]);
                }
            }
        } else {
            let [nameOne, nameTwo] = input.split(' vs ');
            if (pool.hasOwnProperty(nameOne) && pool.hasOwnProperty(nameTwo)) {
                for (let lineOne of pool[nameOne]) {
                    for (let lineTwo of pool[nameTwo]) {
                        if (lineOne[0] == lineTwo[0]) {
                            if (lineOne[1] > lineTwo[1]) {
                                delete pool[nameTwo];
                            } else {
                                delete pool[nameOne];
                            }
                        }
                    }
                }
            }
        }
        i++;
        input = arr[i];
    }
    // function sortArrByTwoCriteria(inputArr) {
    //     let result = inputArr.sort(function (a, b) {
    //         return a.length - b.length || a.localeCompare(b);
    //     });
    //     console.log(result.join('\n'));
    // }
    // let sortedValues = Object.values(pool).sort(function (a, b) {
    //     let sumA = 0;
    //     let sumB = 0;
    //     for (let line of a) {
    //         sumA += line[1];
    //     }
    //     for (let line of b) {
    //         sumB += line[1];
    //     }
    //     return sumB - sumA;
    // });
    // let sortedNames = Object.entries(pool).sort(function(a, b) {

    // });
    console.log(pool);
    
}

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);

function arenaTier2(input) {
    let gladiators = {};
    let line = input.shift();
    let lastTechnique = '';
    while (!line.includes('Ave Cesar')) {
        if(!line.includes('vs')){
            
            let [name, technique, skill] = line.split(' -> ');
            skill = Number(skill);
 
            if(!gladiators.hasOwnProperty(name)){
                gladiators[name] = {};
                gladiators[name][technique] = skill;
                gladiators[name]['skills'] = skill;
 
            } else {
                if((gladiators[name][lastTechnique] <= skill) || (!gladiators[name].hasOwnProperty(technique)))
                {
                    gladiators[name][technique] = skill;
                    gladiators[name]['skills'] += skill;
                }
            }
            lastTechnique = technique;
        } else {
            let [firstName, secondName] = line.split(` vs `);
            
            if(gladiators.hasOwnProperty(firstName) && gladiators.hasOwnProperty(secondName)){
 
                let isBattle = false;
                let firstGladiatorTechniques = Object.entries(gladiators[firstName]);
                let secondGladiatorTechniques = Object.entries(gladiators[secondName]);
                secondGladiatorTechniques.forEach(kvp => {
                    for (let firstGladKvp of firstGladiatorTechniques) {
                        if(firstGladKvp.includes(kvp[0]) && kvp[0] !== 'skills'){
                            isBattle = true;
                        }
                    }
                })
                if(isBattle) {
                    
                    if (gladiators[firstName]['skills'] > gladiators[secondName]['skills']) {
                        delete gladiators[secondName];
                    } else {
                        delete gladiators[firstName];
                    }
                }
            }
        }
        line = input.shift()
    }
    Object.entries(gladiators).sort((a,b) => b[1]['skills'] - a[1]['skills'] || a[0].localeCompare(b[0])).forEach(kvp => {
        console.log(`${kvp[0]}: ${kvp[1]['skills']} skill`);
        Object.entries(kvp[1]).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach(techn => {
            if(techn[0] !== 'skills'){
                console.log(`- ${techn[0]} <!> ${techn[1]}`);
            }
        })
    })
}

// arenaTier2([
//     'Peter -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
// ]);