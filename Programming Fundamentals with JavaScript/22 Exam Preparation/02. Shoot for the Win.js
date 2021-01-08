function shootForTheWin(inputArr) {
    let targets = inputArr.shift().split(' ').map(Number);
    let i = 0;
    let shootIndex = inputArr[i];
    let shots = 0;
    while (shootIndex != 'End') {
        shootIndex = Number(shootIndex);
        if (shootIndex < targets.length && shootIndex >= 0) {
            let current = targets[shootIndex];
            targets.splice(shootIndex, 1, -1);
            shots++;
            for (let j = 0; j < targets.length; j++) {
                if (targets[j] != -1) {
                    if (targets[j] > current) {
                        targets[j] -= current;
                    } else {
                        targets[j] += current;
                    }
                }
            }
        }
        i++;
        shootIndex = inputArr[i];
    }
    console.log(`Shot targets: ${shots} -> ${targets.join(' ')}`);
}

shootForTheWin(['24 50 36 70',
    0,
    4,
    3,
    1,
    'End'
]);