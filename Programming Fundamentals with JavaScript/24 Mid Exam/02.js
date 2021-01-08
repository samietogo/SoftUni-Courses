function listManipulator(inputArr) {
    let friendList = inputArr.shift().split(', ');
    let i = 0;
    let line = inputArr[i];
    let blacklistCount = 0;
    let lostCount = 0;
    while (line != 'Report') {
        if (line.includes('Blacklist')) {
            let name = line.split(' ')[1];
            if (friendList.includes(name)) {
                let index = friendList.indexOf(name);
                friendList.splice(index, 1, 'Blacklisted')
                console.log(`${name} was blacklisted.`);
                blacklistCount++;
            } else {
                console.log(`${name} was not found.`);
            }
        } else if (line.includes('Error')) {
            let index = line.split(' ')[1];
            if (friendList[index] != 'Blacklisted' && friendList[index] != 'Lost') {
                console.log(`${friendList[index]} was lost due to an error.`);
                friendList[index] = 'Lost';
                lostCount++;
            }
        } else {
            let index = line.split(' ')[1];
            let newName = line.split(' ')[2];
            if (index >= 0 && index < friendList.length) {
                console.log(`${friendList[index]} changed his username to ${newName}.`);
                friendList.splice(index, 1, newName);
            }
        }
        i++;
        line = inputArr[i];
    }
    console.log(`Blacklisted names: ${blacklistCount}`);
    console.log(`Lost names: ${lostCount}`);
    console.log(friendList.join(' '));
}

// listManipulator(["Mike, John, Eddie",
//     "Blacklist Mike",
//     "Error 0",
//     "Error 1",
//     "Change 2 Mike123",
//     "Report"]);

listManipulator(["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Blacklist Eddie",
    "Report"]);