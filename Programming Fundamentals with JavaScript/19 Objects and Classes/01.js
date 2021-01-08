function car() {

    let myObj = {
        mark: 'audi',
        color: 'black',
        engine: 4.2,
        maxSpeed: 300
    };

    myObj.color = 'silver';

    myObj.fuel = 'gasoline';

    console.log(myObj);
    console.log(myObj.fuel);
    console.log(myObj['fuel']);

}

// car();

function personInfo(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    return person;
}

// console.log(personInfo("Peter", "Pan", "20"));

function personInfo2(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    return person;
}

// console.log(personInfo2("Peter", "Pan", "20"));

function personInfo3(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    };

    return person;
}

// console.log(personInfo3("Peter", "Pan", "20"));

function car() {

    let myObj = {
        mark: 'audi',
        color: 'black',
        engine: 4.2,
        maxSpeed: 300,
        makeSound: function () {
            console.log('Vroom');
        },
        makeDonnuts() {
            console.log('Yes');
        },
        makeFire: () => console.log('Very')
    };

    myObj.makeNoise = () => console.log('Daaa');

    function makeShits() {
        console.log('Very big shits');
    }

    myObj.makeShits = makeShits;

    myObj.makeSound();
    myObj.makeDonnuts();
    myObj.makeFire();
    myObj.makeNoise();
    myObj.makeShits();

}

// car();

function solve() {
    let person = {
        name: 'Ivan',
        lasName: 'Petrov',
        age: 40
    };

    console.log(Object.keys(person));
    console.log(Object.values(person));
    console.log(Object.entries(person));
}

// solve();

function solve2() {
    let person = {
        firsName: 'Ivan',
        lasName: 'Petrov',
        age: 40
    };

    let objKeys = Object.keys(person);
    for (let key of objKeys) {
        console.log(key);
        console.log(`${key} = ${person[key]}`);
    }
}

// solve2();

function city(obj) {
    let objElements = Object.keys(obj);
    for (let i of objElements) {
        console.log(`${i} -> ${obj[i]}`);
    }
}

// city ({
//     name: "Sofia",
//     area: 492,
//     population: 1238438,
//     country: "Bulgaria",
//     postCode: "1000"
// });

function city2(city) {
    let keys = Object.keys(city);
    for (let i of keys) {
        let value = city[i];
        console.log(`${i} -> ${value}`);
    }
}

// city2 ({
//     name: "Sofia",
//     area: 492,
//     population: 1238438,
//     country: "Bulgaria",
//     postCode: "1000"
// });

function city3(city) {
    for (let i of Object.keys(city)) {
        console.log(`${i} -> ${city[i]}`);
    }
}

// city3 ({
//     name: "Sofia",
//     area: 492,
//     population: 1238438,
//     country: "Bulgaria",
//     postCode: "1000"
// });

function jsonStringify() {
    let newObj = {
        name: 'Ivan',
        age: 25,
        grade: '6'
    };

    let jsonVar = JSON.stringify(newObj);
    console.log(jsonVar);
}

// jsonStringify();

function jsonParse(input) {
    let parsed = JSON.parse(input);
    console.log(parsed);
}

// jsonParse('{"name":"Ivan","age":"25","grade":"6"}');

function convertToObject(input) {
    let newObj = JSON.parse(input);
    for (let i of Object.keys(newObj)) {
        console.log(`${i}: ${newObj[i]}`);
    }
}

// convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

function convertToJson(firstName, lastName, hairColor) {
    let newObj = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    };

    let newJson = JSON.stringify(newObj);
    console.log(newJson);

}

// convertToJson('George', 'Jones', 'Brown');

function classTest() {
    class Person {
        constructor(firstName, lastName, age) {
            this.firsName = firstName;
            this.lasName = lastName;
            this.age = age;
        }
    }

    let myPerson = new Person('Sami', 'Etogo', 41);
    let myPersonJson = JSON.stringify(myPerson);

    console.log(myPersonJson);
}

// classTest();

function cats(inputArr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for(let cats of inputArr) {
        let [catName, catAge] = cats.split(' ');
        let cat = new Cat(catName, catAge);
        cat.meow();
    }
}

// cats(['Mellow 2', 'Tom 5']);

function songs(inputArr) {
    class Song {
        constructor(type, name, time) {
            this.type = type,
            this.name = name,
            this.time = time
        }
        print() {
            console.log(`${this.name}`);
        }
    }
    inputArr.shift();
    let selectedType = inputArr.pop();
    for(let song of inputArr) {
        let [songType, songName, songTime] = song.split('_');
        let music = new Song(songType, songName, songTime);
        if(music.type == selectedType) {
            music.print();
        } else if (selectedType == 'all') {
            music.print();
        }
    }
}

// songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);

function songs2(inputArr) {
    class Song {
        constructor(type, name, time) {
            this.type = type,
            this.name = name,
            this.time = time
        }
    }
    let songs = [];
    let numberOfSongs = inputArr.shift();
    let selectedType = inputArr.pop();
    for(let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = inputArr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if(selectedType == 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === selectedType);
        filtered.forEach((i) => console.log(i.name));
    }
}

// songs2([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);