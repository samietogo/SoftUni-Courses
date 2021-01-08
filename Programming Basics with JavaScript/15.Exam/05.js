function trips(input) {
    let seaTrip = Number(input[0]);
    let mountainTrip = Number(input[1]);
    let i = 2;
    let command = input[i];
    let sSum = 0;
    let mSum = 0;
    let sum = 0;

    while(command !== "Stop") {

        if(command == "sea") {
            if(seaTrip !== 0) {
                sSum += 680;
            }
            seaTrip -= 1;
        } else if(command == "mountain") {
            if(mountainTrip !== 0) {
                mSum += 499;
            }
            mountainTrip -= 1;
        }
        i++;
        command = input[i]

        if(seaTrip <= 0 && mountainTrip <= 0) {
            console.log(`Good job! Everything is sold.`);
            break;
        }
    }

    
    sum = sSum + mSum;
    console.log(`Profit: ${sum} leva.`);

}

trips(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"
    ])