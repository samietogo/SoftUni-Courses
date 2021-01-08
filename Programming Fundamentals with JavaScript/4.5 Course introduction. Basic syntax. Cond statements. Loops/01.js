function multiply(arg) {
    console.log(arg * 2);

}
// multiply(4);

function grade(arg) {
    let num = Number(arg);

    if(num >= 5.50) {
        console.log("Excellent");
    } else {
        console.log("Not excellent");
    }
}

// grade("5.49");

function printNumbers() {
    for(let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

// printNumbers();

function printNumbersToOne(arg) {
    let i = arg;

    while(i > 0) {
        console.log(i);
        i--;
    }

}

// printNumbersToOne("3");

function printNumbersInRange(m, n) {
    m = Number(m);
    n = Number(n);
    let i = m;

    while (i >= n) {
        console.log(i);
        i--;
    }
}

// printNumbersInRange("25","1");

function student(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

// student('John', 15, 5.54678);

function month(num) {
        switch(num) {
            case 1: console.log("January"); break;
            case 2: console.log("February"); break;
            case 3: console.log("March"); break;
            case 4: console.log("April"); break;
            case 5: console.log("May"); break;
            case 6: console.log("Juny"); break;
            case 7: console.log("July"); break;
            case 8: console.log("August"); break;
            case 9: console.log("September"); break;
            case 10: console.log("October"); break;
            case 11: console.log("Novenmber"); break;
            case 12: console.log("December"); break;
            default: console.log("Error!"); break;
        }
}

// month(3);

function linguages(country) {

        switch(country) {
            case "England" :
            case "USA" : console.log("English"); break;
            case "Spain" :
            case "Argentina" :
            case "Mexico" : console.log("Spanish"); break;
            default : console.log("unknown");
        }
}

// linguages("USA");

function tickets(day, age) {
    let price = 0;

    if(age <= 122 && age >= 0) {
        if(day == "Weekday") {
            if(age >= 0 && age <= 18 || age > 64 && age <= 122) {
                price = 12;
            } else {
                price = 18;
            }
        } else if(day == "Weekend") {
            if(age >= 0 && age <= 18 || age > 64 && age <= 122) {
                price = 15;
            } else {
                price = 20;
            }
        } else {
            if(age >= 0 && age <= 18) {
                price = 5;
            } else if(age > 18 && age <= 64) {
                price = 12;
            } else {
                price = 10;
            }
        }
        console.log(`${price}$`);
    } else {
        console.log("Error!");
    }
}

// tickets('Holiday', 15);

function divisibleByThree() {
    for(let i = 1; i <= 100; i++) {
        if(i % 3 == 0) {
            console.log(i);
        }
    }
}

// divisibleByThree();

function sumOddNumbers(num) {
    let i = 1;
    let sum = 0;
    let count = num;
    while(true) {
        if(i % 2 !== 0) {
            sum += i;
            console.log(i);
            count--;
        }
        i++;
        if(count == 0) {
            break;
        }
    }
    console.log(`Sum: ${sum}`);
}

sumOddNumbers(10);