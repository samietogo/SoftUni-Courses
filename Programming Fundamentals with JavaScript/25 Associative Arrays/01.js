function phoneBook(arr) {
    let phoneBook = {};
    for (let line of arr) {
        let [name, phone] = line.split(' ');
        phoneBook[name] = phone;
    }
    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

// phoneBook(['Tim 0834212554',
//     'Peter 0877547887',
//     'Bill 0896543112',
//     'Tim 0876566344']
// );

function meetings(arr) {
    let org = {};
    for (let line of arr) {
        let [day, name] = line.split(' ');
        if (org.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            org[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let line in org) {
        console.log(`${line} -> ${org[line]}`);
    }
}

// meetings(['Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim']
// );

function addressBook(arr) {
    let unsortedBook = {};
    let book = {};
    for (let line of arr) {
        let [name, address] = line.split(':');
        unsortedBook[name] = address;
    }
    let entries = Object.entries(unsortedBook);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [a, b] of entries) {
        book[a] = b;
    }
    for (let key in book) {
        console.log(`${key} -> ${book[key]}`);
    }
}

// addressBook(['Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd']
// );

function storage(arr) {
    let map = new Map();
    for (let line of arr) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);
        if (map.has(product)) {
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity += quantity;
            map.set(product, newQuantity);
        } else {
            map.set(product, quantity);
        }
    }
    for (let line of map) {
        console.log(`${line[0]} -> ${line[1]}`);
    }
}

// storage(['tomatoes 10',
// 'coffee 5',
// 'olives 100',
// 'coffee 40']
// );

function schoolGrades(arr) {
    let stu = new Map();
    for (let line of arr) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);
        if (!stu.has(name)) {
            stu.set(name, []);
        }

        let currentGrade = stu.get(name);
        for (let line of grades) {
            currentGrade.push(line);
        }
    }

    let sorted = Array.from(stu);
    sorted.sort(compareGrades);
    for (let [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`);
    }

    function compareGrades([nameA, gradesA], [nameB, gradesB]) {
        let avgA = 0;
        gradesA.forEach(x => avgA += x);
        avgA /= gradesA.length;

        let avgB = 0;
        gradesB.forEach(x => avgB += x);
        avgB /= gradesB.length;

        return avgA - avgB;
    }
}

// schoolGrades(['Lilly 4 6 6 5',
//     'Tim 5 6',
//     'Tammy 2 4 3',
//     'Tim 6 6']
// );

function words(arr) {
    let words = new Map();
    let count = 1;
    for (let line of arr) {
        if (!words.has(line)) {
            words.set(line, count);
        } else {
            let current = words.get(line) + 1;
            words.set(line, current);
        }
    }
    let sorted = Array.from(words);
    sorted.sort(([a, aa], [b, bb]) => bb - aa);
    for (let line of sorted) {
        console.log(`${line[0]} -> ${line[1]} times`);
    }
}

// words(["Here", "is", "the", "first",
//     "sentence", "Here", "is", "another",
//     "sentence", "And", "finally", "the",
//     "third", "sentence"]);

function neighboors(arr) {
    let neighborhoods = arr.shift().split(', ');
    let neighMap = new Map();
    for (let line of neighborhoods) {
        neighMap.set(line, []);
    }
    for (let line of arr) {
        let [neigh, name] = line.split(' - ');
        if (neighMap.has(neigh)) {
            let current = neighMap.get(neigh);
            current.push(name);
            neighMap.set(neigh, current);
        }
    }
    let sorted = Array.from(neighMap).sort(([a, aa], [b, bb]) => bb.length - aa.length);
    for (let line of sorted) {
        console.log(`${line[0]}: ${line[1].length}`);
        if (line[1] != 0) {
            let current = line[1];
            for (let line of current) {
                console.log(`--${line}`);
            }
        }
    }
}

neighboors(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);