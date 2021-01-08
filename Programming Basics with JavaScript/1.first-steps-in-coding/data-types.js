function readText(input) {
    let name = input;

    console.log(name);

}

// readText("Hui");

function readNumber(input) {
    let num = Number(input);

    console.log(num);
}

// readNumber("999");

function squareArea(input) {
    let a = Number(input);
    let area = a * a;

    console.log(area);
}

// squareArea("3");

function squareArea(input1 , input2) {
    let a = Number(input1);
    let b = Number(input2);
    let area = a * b;

    console.log(area);
}

// squareArea("3","4");

function greetingByName(input) {
    let name = input;
    let greeting = "Hello, " + name + "!";

    console.log(greeting);
}

// greetingByName("Sami the Big Fucker");

let firstName = "Sami";
let lastName = "Etogo";
let age = 40;
let str = firstName + " " + lastName + " @ " + age;

// console.log(str);

let a1 = 1.5;
let b1 = 2.5;
let sum = "The sum is: " + a1 + b1;

// console.log(sum);

let a2 = 5;
let b2 = 6;
let sum1 = a2 + b2;

// console.log(sum1);

function substract(firstNum, secondNum) {
    let a = Number(firstNum);
    let b = Number(secondNum);
    let result = a - b;

    console.log(result);
}

// substract("25", "5");
// substract("25", "15");
// substract("25", "30");

let a3 = 3;
let b3 = 9;
let multiply = a3 * b3;

// console.log(multiply);

let a4 = 20;
let b4 = 3;
let i = a4 / b4;
let f = parseInt(a4 / b4);
let infinity = a4 / 0;
let sqrt = Math.sqrt(-1);

// console.log(i);
// console.log(f);
// console.log(infinity);
// console.log(sqrt);

let odd = 3 % 2;
let even = 4 % 2;
let error = 3 % 0;

// console.log(odd);
// console.log(even);
// console.log(error);

function greet(input) {
    let name = input;

    console.log(`Hello, ${name}!`);
}

// greet("Sami");

function personalInfo(firstName,lastName,age,town) {
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}

// personalInfo("Sami","Etogo","40","Sofia");

function convert(input) {
    let a = Number(input) * 2.54;

    console.log(a);
}

// convert("10");

function projectCount(name, projects) {
    let a = Number(projects) * 3;
    
    console.log(`The architect ${name} will need ${a} hours to complete ${projects} project/s.`)
}

//projectCount("Sami Etogo","4");

function cost(dogs, others) {
    let a = Number(dogs) * 2.5;
    let b = Number(others) * 4;
    let c = a + b;

    console.log(`${c} lv.`)
}

//cost("1", "3");

function calcPrice(squareMeters) {

    let a = Number(squareMeters) * 7.61;
    let b = a * 0.18;
    let c = a - b;

    console.log(`The final price is: ${c} lv.`);
    console.log(`The discount is: ${b} lv.`);
}

calcPrice("25");