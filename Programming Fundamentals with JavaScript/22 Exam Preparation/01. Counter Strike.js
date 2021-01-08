function counterStrike(inputArr) {
    let energy = Number(inputArr.shift());
    let wins = 0;
    let isDead = false;
    let i = 0;
    let current = inputArr[i];
    while (true) {
        if (current == 'End of battle') {
            break;
        }
        if (energy >= current) {
            wins++;
            energy -= current;
            if (wins % 3 == 0) {
                energy += wins;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            isDead = true;
            break;
        }
        i++;
        current = inputArr[i];
    }
    if (!isDead) {
        console.log(`Won battles: ${wins}. Energy left: ${energy}`);
    }
}

counterStrike([200,
    54,
    14,
    28,
    13,
    'End of battle']);