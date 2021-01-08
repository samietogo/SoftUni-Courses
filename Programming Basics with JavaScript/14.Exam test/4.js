function balls(input) {
    let number = Number(input[0]);
    let points = 0;
    let countRed = 0;
    let countOrange = 0;
    let countYellow = 0;
    let countWhite = 0;
    let countBlack = 0;
    let count = 0;

    for(let i = 1; i <= number; i++) {
        let color = input[i];

        if(color == "red") {
            points += 5;
            countRed++;
        } else if(color == "orange") {
            points += 10;
            countOrange++;
        } else if(color == "yellow") {
            points += 15;
            countYellow++;
        } else if(color == "white") {
            points += 20;
            countWhite++;
        } else if(color == "black") {
            points /= 2;
            countBlack++;
        } else {
            count++;
        }

    }

    console.log(`Total points: ${Math.floor(points)}`);
    console.log(`Points from red balls: ${countRed}`);
    console.log(`Points from orange balls: ${countOrange}`);
    console.log(`Points from yellow balls: ${countYellow}`);
    console.log(`Points from white balls: ${countWhite}`);
    console.log(`Other colors picked: ${count}`);
    console.log(`Divides from black balls: ${countBlack}`);

}

balls(["10",
    "white",
    "white",
    "ee",
    "red",
    "orange",
    "red",
    "black",
    "black",
    "black",
    "black"])