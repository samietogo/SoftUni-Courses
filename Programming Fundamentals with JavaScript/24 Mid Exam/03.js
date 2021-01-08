function cards(inputArr) {
    let owned = inputArr.shift().split(', ');
    let count = Number(inputArr.shift());
    let i = 0;
    let line = inputArr[i];
    while (count != 0) {
        if (line.includes('Add')) {
            let name = line.split(', ')[1];
            if (owned.includes(name)) {
                console.log(`Card is already bought`);
            } else {
                owned.push(name);
                console.log(`Card successfully bought`);
            }
        } else if (line.includes('Remove')) {
            if (line.split(', ')[0] == 'Remove') {
                let name = line.split(', ')[1];
                if (owned.includes(name)) {
                    console.log(`Card successfully sold`);
                    let index = owned.indexOf(name);
                    owned.splice(index, 1);
                } else {
                    console.log(`Card not found`);
                }
            } else {
                let index = line.split(', ')[1];
                if (index >= 0 && index < owned.length) {
                    console.log(`Card successfully sold`);
                    owned.splice(index, 1);
                } else {
                    console.log(`Index out of range`);
                }
            }
        } else {
            let index = line.split(', ')[1];
            let name = line.split(', ')[2];
            if (index >= 0 && index < owned.length) {
                if (owned.includes(name)) {
                    console.log(`Card is already bought`);
                } else {
                    owned.splice(index, 0, name);
                    console.log(`Card successfully bought`);
                }
            } else {
                console.log(`Index out of range`);
            }
        }
        i++;
        line = inputArr[i];
        count--;
    }
    console.log(owned.join(', '));
}

// cards(["T-34-85 Rudy, SU-100Y, STG",
//     "3",
//     "Add, King Tiger(C)",
//     "Insert, 2, IS-2M",
//     "Remove, T-34-85 Rudy"]);

cards(["T 34, T 34 B, T92, AMX 13 57",
    "4",
    "Add, T 34",
    "Remove, AMX CDC",
    "Insert, 10, M60",
    "Remove At, 1"]);