function catLife(arg1, arg2) {
    let breed = arg1;
    let sex = arg2;
    let years = 0;
    let catMonths = 0;
    let isValid = true;

    if(breed == "British Shorthair") {
        if(sex == "m") {
            years = 13;
        } else {
            years = 14;
        }
    } else if(breed == "Siamese") {
        if(sex == "m") {
            years = 15;
        } else {
            years = 16;
        }
    } else if(breed == "Persian") {
        if(sex == "m") {
            years = 14;
        } else {
            years = 15;
        }
    } else if(breed == "Ragdoll") {
        if(sex == "m") {
            years = 16;
        } else {
            years = 17;
        }
    } else if(breed == "American Shorthair") {
        if(sex == "m") {
            years = 12;
        } else {
            years = 13;
        }
    } else if(breed == "Siberian") {
        if(sex == "m") {
            years = 11;
        } else {
            years = 12;
        }
    } else {
        console.log(`${breed} is invalid cat!`);
        isValid = false;
    }

    catMonths = (years * 12) / 6;

    if(isValid) {
        console.log(`${catMonths} cat months`);
    }

}

catLife("Persian",
    "m"
    )