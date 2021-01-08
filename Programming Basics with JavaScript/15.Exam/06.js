function flyPassengers(input) {
    let airlineCount = Number(input[0]);
    let j = 1;
    let command = input[j];
    let airline = "";
    let passengers = 0;
    let flyCount = 0;
    let allPassengers = 0;
    let currentAirline = "";
    let currentPassengers = 0;

    for(let i = 1; i <= airlineCount; i++) {
        
        airline = command;
        j++;
        command = input[j];
        while(command !== "Finish") {
            flyCount++;
            command = Number(command);
            passengers += command;
            j++;
            command = input[j];
        }
        j++;
        command = input[j];
        allPassengers = passengers / flyCount;
        console.log(`${airline}: ${Math.floor(allPassengers)} passengers.`);
        flyCount = 0;
        passengers = 0;

        if(allPassengers > currentPassengers) {
            currentPassengers = allPassengers;
            currentAirline = airline;
        }
    }

    console.log(`${currentAirline} has most passengers per flight: ${Math.floor(currentPassengers)}`)

}

flyPassengers(["3",
    "WizzAir",
    "180",
    "230",
    "100",
    "Finish",
    "BulgariaAir",
    "50",
    "60",
    "90",
    "Finish",
    "Lufthansa",
    "260",
    "320",
    "Finish"
    ])