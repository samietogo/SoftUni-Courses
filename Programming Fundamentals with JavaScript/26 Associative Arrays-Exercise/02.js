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

arenaTier2([
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