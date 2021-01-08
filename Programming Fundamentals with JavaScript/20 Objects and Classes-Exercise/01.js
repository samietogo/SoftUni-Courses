function employees(arr) {
    let employeeObj = {};

    for (let i of arr) {
        employeeObj[i] = i.length;
    }

    let employeeKeys = Object.keys(employeeObj);

    // for (let i of employeeKeys) {
    //     console.log(`Name: ${i} -- Personal Number: ${employeeObj[i]}`);
    // }
    employeeKeys.forEach(i => {
        console.log(`Name: ${i} -- Personal Number: ${employeeObj[i]}`);
    });
    // console.log(Object.entries(employeeObj));
}

// employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

function employees2(arr) {
    let emplObj = [];
    arr.forEach(i => {
        let person = {
            name: i,
            number: i.length
        }
        emplObj.push(person);
    });
    emplObj.forEach(i => {
        console.log(`Name: ${i.name} -- Personal Number: ${i.number}`);
    });
}

// employees2(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

function employees2(arr) {

    class Person {
        constructor(name) {
            this.name = name,
                this.number = name.length
        }
        print() {
            return `Name: ${this.name} -- Personal Number: ${this.number}`
        }
    }
    arr = arr.map(x => new Person(x))
        .forEach(i => {
            console.log(i.print());
        });
}

// employees2(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

function town(arr) {
    for (let i of arr) {
        let current = i.split(' | ');
        let latitude = Number(current[1]);
        let longitude = Number(current[2]);
        let towns = {
            town: current[0],
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        };
        console.log(towns);
    }
}

// town(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);


function town2(arr) {
    for (let i of arr) {
        let [town, latitude, longitude] = i.split(' | ');
        let towns = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(towns);
    }
}

// town2(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);


function storeProvision(inStock, ordered) {
    let products = {};
    for (let i = 0; i < inStock.length; i += 2) {
        let current = inStock[i];
        products[current] = Number(inStock[i + 1]);
    }
    for (let i = 0; i < ordered.length; i += 2) {
        let current = ordered[i];
        if (products.hasOwnProperty(current)) {
            products[current] += Number(ordered[i + 1]);
        } else {
            products[current] = Number(ordered[i + 1]);
        }
    }
    Object.keys(products).forEach(key => {
        console.log(`${key} -> ${products[key]}`);
    });
}

// storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//               ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

function movies(arr) {
    let movie = [];
    for (let line of arr) {
        if (line.includes('addMovie')) {
            let current = {};
            let name = line.substring(9);
            current.name = name;
            movie.push(current);
        } else if (line.includes('directedBy')) {
            let commands = line.split(' directedBy ');
            let [name, movieDirector] = commands;
            let myMovie = movie.find(x => x.name == name);
            if (myMovie) {
                myMovie.director = movieDirector;
            }
        } else {
            let [name, movieDate] = line.split(' onDate ');
            let myMovie = movie.find(x => x.name == name);
            if (myMovie) {
                myMovie.date = movieDate;
            }
        }
    }
    movie.forEach(m => {
        if (m.name && m.director && m.date) {
            console.log(JSON.stringify(m));
        }
    });
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);

function inventory(arr) {
    let heroes = [];
    for (let line of arr) {
        let [hero, level, items] = line.split(' / ');
        level = Number(level);
        items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');
        let heroObj = {
            Hero: hero,
            level,
            items
        }
        heroes.push(heroObj);
    }
    heroes.sort((a, b) => a.level - b.level).forEach(hero => {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}

// inventory(["Isacc / 25 / Apple, GravityGun",
//     "Derek / 12 / BarrelVest, DestructionSword",
//     "Hes / 1 / Desolator, Sentinel, Antara"]);

function dictionary(arr) { 
    let dictionary = {};
    arr.forEach(element => {
        element = JSON.parse(element);
        let tuple = Object.entries(element);
        let term = tuple[0][0];
        let definition = tuple[0][1];
        dictionary[term] = definition;
    });
    
    Object.entries(dictionary)
    .sort((a,b) => a[0].localeCompare(b[0]))
    .forEach( e => {
        console.log(`Term: ${e[0]} => Definition: ${e[1]}`);

    });
}

// dictionary([
// '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
// '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
// '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
// '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
// '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);

