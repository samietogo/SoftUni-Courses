function timeSum(arg1, arg2, arg3) {
    let timeOne = Number(arg1);
    let timeSecond = Number(arg2);
    let timeThird = Number(arg3);
    let totalTime = timeOne + timeSecond + timeThird;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

//timeSum("41", "45", "44");

function bonusPointsMath(arg1) {
    let number = Number(arg1);
    let points = 0.0;
    if(number <= 100) {
        points = 5;
    } else if(number > 1000) {
        points = number * 0.1;
    } else {
        points = number * 0.2;
    }
    if(number % 2 == 0) {
        points = points + 1;
    } else if(number % 10 == 5) {
        points = points + 2;
    }

    number = number + points;

    console.log(points);
    console.log(number);
}

//bonusPointsMath("15875");

function speedTest(arg1) {
    let speed = Number(arg1);
    if(speed <= 10) {
        console.log("slow");
    } else if(speed <= 50) {
        console.log("average");
    } else if(speed <= 150) {
        console.log("fast");
    } else if(speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}

//speedTest("10.5");

function convert(arg1, arg2, arg3) {
    let number = Number(arg1);
    let unitIn = arg2;
    let unitOut = arg3;
    let result = 0;
    if(unitIn == "mm") {
        if(unitOut == "m") {
            result = number / 1000;
        } else if(unitOut == "cm") {
            result = number / 10;
        }
    } else if(unitIn == "m") {
        if(unitOut == "cm") {
            result = number * 100;
        } else if(unitOut == "mm") {
            result = number * 1000;
        }
    } else if(unitIn == "cm") {
        if(unitOut == "mm") {
            result = number * 10;
        } else if(unitOut == "m") {
            result = number / 100;
        }
    }
    
    console.log(result.toFixed(3)); 
}

//convert("45", "cm", "mm");

function time(hour, min) {
    hour = Number(hour);
    min = Number(min);
    min = min + 15;
    hour = hour + Math.floor(min / 60);
    hour = hour % 24;
    min = min % 60;
    if(min < 10) {
        console.log(`${hour}:0${min}`);
    } else {
        console.log(`${hour}:${min}`);
    }

}

//time("23", "46");

function movie(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let statist = Number(arg2);
    let clotesPrice = Number(arg3);
    let decors = budget * 0.1;

    if(statist > 150) {
        clotesPrice = (statist * clotesPrice) * 0.9;
    } else {
        clotesPrice = statist * clotesPrice;
    }

    let cost = clotesPrice + decors;
    let left = budget - cost;

    if(cost <= budget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${left.toFixed(2)} leva left.`);
    } else {
        left = cost - budget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${left.toFixed(2)} leva more.`);
    }

}

//movie("9587.88", "222", "55.68");

function swimming(arg1, arg2, arg3) {
    let record = Number(arg1);
    let distance = Number(arg2);
    let secondsForMeter = Number(arg3);
    let friction = Math.floor(distance / 15) * 12.5;
    let newRecord = (secondsForMeter * distance) + friction;
    let difference = 0;

    if(record <= newRecord) {
        difference = newRecord - record;
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${newRecord.toFixed(2)} seconds.`);
    }

}

//swimming("55555.67", "3017", "5.03");

function scholarshipA(arg1, arg2, arg3) {
    let earnings = Number(arg1);
    let grade = Number(arg2);
    let salary = Number(arg3);
    let socialSc = salary * 0.35;
    let excellentSc = grade * 25;

    if(earnings > salary) {
        if(grade < 5.5) {
            console.log(`You cannot get a scholarship!`);
        } else if(grade >= 5.5) {
            console.log(`You get a scholarship for excellent results ${excellentSc} BGN`);
        }
    } else if(earnings < salary) {
        if(grade < 5.5) {
            if(grade > 4.5) {
                console.log(`You get a Social scholarship ${socialSc} BGN`);
            } else {
                console.log(`You cannot get a scholarship!`);
            }
        } 
    } else {
        if(grade >= 5.5) {
            if(earnings < salary) {
                if(socialSc > excellentSc) {
                    console.log(`You get a Social scholarship ${socialSc} BGN`);
                } else {
                    console.log(`You get a scholarship for excellent results ${excellentSc} BGN`);
                }
            }
        }
    }
}

//scholarshipA("480.00", "4.60", "450.00");
//scholarshipA("300.00", "5.65", "420.00");


function scholarship(arg1,arg2,arg3){
    let salary = Number(arg1);
    let grade = Number(arg2);
    let minSalary = Number(arg3);
    let scholarshipSal = Math.floor(minSalary * 35/100);
    let scholarshipGrade = Math.floor(grade*25);
    let scholarship = Number(0);
   
    if (salary<=minSalary && grade > 4.5 && grade >= 5.5){
        if(scholarshipGrade>=scholarshipSal){
            scholarship = scholarshipGrade;
            console.log(`You get a scholarship for excellent results ${scholarship} BGN`);
           
 
        }else {
            scholarship = scholarshipSal;
            console.log(`You get a Social scholarship ${scholarship} BGN`);
           
        }
 
    } else if(salary <= minSalary && grade > 4.5 ){
        scholarship = scholarshipSal
        console.log(`You get a Social scholarship ${scholarship} BGN`);
       
    } else if(grade >= 5.5){
        scholarship = scholarshipGrade;
        console.log(`You get a scholarship for excellent results ${scholarship} BGN`);
 
    } else {
        console.log("You cannot get a scholarship!");
       
    }
 
   
}

//scholarship("480.00", "4.60", "450.00");
//scholarship("300.00", "5.65", "420.00");