function solve(arr) {
    let str = arr.shift();
    while((command = arr.shift()) != 'End') {
        let action = command.split(' ')[0];
        if(action == 'Translate') {
            let [a, char, repl] = command.split(' ');
            for(let i = 0; i < str.length; i++) {
                let current = str[i];
                if(current == char) {
                    let newStr = str.replace(current, repl);
                    str = newStr;
                }
            }
            console.log(str);
        } else if(action == 'Includes') {
            let a = command.split(' ')[1];
            console.log(`${str.includes(a) ? 'True' : 'False'}`);
        } else if(action == 'Start') {
            let a = command.split(' ')[1];
            console.log(`${str.startsWith(a) ? 'True' : 'False'}`);
        } else if(action == 'Lowercase') {
            let current = str.toLowerCase();
            str = current;
            console.log(`${str}`);
        } else if(action == 'FindIndex') {
            for(let i = str.length - 1; i >= 0; i--) {
                let current = str[i];
                if(current == command.split(' ')[1]) {
                    console.log(`${str.indexOf(str[i])}`);
                }
            }
        } else {
            let [a, start, count] = command.split(' ');
            start = Number(start);
            count = Number(count);
            let current = str.substr(start, count - start);
            let sliced = str.replace(current, '');
            str = sliced;
            console.log(str);
        }
    }
}

solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
]);