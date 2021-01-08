function furniture(arr) {
    let tempArr = [];
    let namesArr = [];
    let total = 0;
    let i = 0;
    let command = arr[i];
    while (command != 'Purchase') {
        tempArr.push(command);
        i++;
        command = arr[i];
    }
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>(\d+(\.\d+)?))!(?<count>\d+)/g;
    while ((match = pattern.exec(tempArr.join(' '))) != null) {
        let name = match.groups['name'];
        let price = match.groups['price'];
        let count = match.groups['count'];
        namesArr.push(name);
        total += Number(price) * Number(count);
    }
    console.log(`Bought furniture:\n${namesArr.join('\n')}\nTotal money spend: ${total.toFixed(2)}`);
}

// furniture(['>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase']);

function furniture2(arr) {
    let result = 'Bought furniture:\n';
    let total = 0;
    for (let line of arr) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>(\d+(\.\d+)?))!(?<count>\d+)/g;
        let match = pattern.exec(line);
        if (match) {
            result += match.groups.name + '\n';
            total += Number(match.groups.price) * Number(match.groups.count);
        }
    }
    result += `Total money spend: ${total.toFixed(2)}`;
    console.log(result);
}

// furniture2(['>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase']);

function race(arr) {
    let namesArr = arr.shift().split(', ');
    let racers = {};
    for (let line of arr) {
        if (line == 'end of race') {
            break;
        }
        let namesPattern = /[A-Za-z]/g;
        let digitsPattern = /\d/g;
        let matchName = line.match(namesPattern);
        let matchDigit = line.match(digitsPattern);
        let currentDigit = 0;
        for (let num of matchDigit) {
            currentDigit += Number(num);
        }
        if (namesArr.includes((matchName.join('')))) {
            if (racers.hasOwnProperty(matchName.join(''))) {
                racers[matchName.join('')] += currentDigit;
            } else {
                racers[matchName.join('')] = currentDigit;
            }
        }
    }
    let sorted = Object.entries(racers).sort(([a, aa], [b, bb]) => bb - aa);
    console.log(`1st place: ${sorted[0][0]}\n2nd place: ${sorted[1][0]}\n3rd place: ${sorted[2][0]}`);
}

// race([
//     'George, Peter, Bill, Tom',
//     'G4e@55or%6g6!68e!!@',
//     'R1@!3a$y4456@',
//     'B5@i@#123ll',
//     'G@e54o$r6ge#',
//     '7P%et^#e5346r',
//     'T$o553m&6',
//     'end of race'
// ]);

function bar(arr) {
    let total = 0;
    for(let line of arr) {
        let pattern = /%(?<name>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>[\w]+)>([^\|\$%\.]+)?\|(?<count>[0-9]+)\|([^\|\$%\.\d]+)?(?<price>[0-9]+(\.[0-9]+)?)\$/g;
        let match = pattern.exec(line);
        if(match) {
            let currentName = match.groups.name;
            let currentProduct = match.groups.product;
            let currentPrice = Number(match.groups.price) * Number(match.groups.count);
            total += currentPrice;
            console.log(`${currentName}: ${currentProduct} - ${currentPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

bar(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);