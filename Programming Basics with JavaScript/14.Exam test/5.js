function bestPlayer(input) {
    let i = 0;
    let player = input[i];
    i++;
    let goals = Number(input[i]);
    let command = input[i];
    let tempPlayer = "";
    let moreGoals = 0;

    while(command !== "END") {

        if(moreGoals < goals) {
            moreGoals = goals;
            tempPlayer = player;
        }

        if(goals >= 10) {
            break;
        }
        i++;
        player = input[i];
        command = input[i];
        i++;
        goals = Number(input[i]);
    }

    console.log(`${tempPlayer} is the best player!`)
    
    if(moreGoals >= 3) {
        console.log(`He has scored ${moreGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${moreGoals} goals.`);
    }
}

bestPlayer(["Neymar",
    "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END" ])