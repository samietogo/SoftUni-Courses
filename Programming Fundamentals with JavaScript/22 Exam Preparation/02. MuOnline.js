function muOnline(str) {
    let health = 100;
    let bitcoins = 0;
    let room = 0;
    let isDead = false;
    let arr = str.split('|');
    for (let i = 0; i < arr.length; i++) {
        let [command, value] = arr[i].split(' ');
        value = Number(value);
        if (command == 'potion') {
            let healed = 0;
            if (health + value > 100) {
                healed = 100 - health;
                health = 100;
            } else {
                healed = value;
                health += value;
            }
            room++;
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            bitcoins += value;
            room++;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;
            room++;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${room}`);
                isDead = true;
                break;
            }
        }
    }
    if (!isDead) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');