function solve(arr) {
    let pattern = /!(?<command>[A-Z][A-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]/g;
    let count = Number(arr.shift());
    let print = '';
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if((match = pattern.exec(current)) == null) {
            console.log(`The message is invalid`);
        } else {
            let command = match.groups['command'];
            let message = match.groups['message'];
            for(let char of message) {
                let charNum = char.charCodeAt(0);
                print += charNum + ' ';
            }
            console.log(`${command}: ${print}`);
        }
    }
}

solve(['2',
    '!Send!:[IvanisHere]',
    '*Time@:[Itis5amAlready]'
]);
solve([
    '3',
    'go:[outside]',
    '!drive!:YourCarToACarWash',
    '!Watch!:[LordofTheRings]'
]);
solve([
    '3',
    '!play!:[TheNewSong]',
    '!Ride!:[Bike]',
    '!Watch!:[LordofTheRings]'
]);