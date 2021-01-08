function inventory(inputArr) {
    let myInventory = inputArr.shift().split(', ');
    let i = 0;
    let current = inputArr[i];
    while (current != 'Craft!') {
        if (current.includes('Collect')) {
            let item = current.split(' - ').pop();
            if (!myInventory.includes(item)) {
                myInventory.push(item);
            }
        } else if (current.includes('Drop')) {
            let item = current.split(' - ').pop();
            if (myInventory.includes(item)) {
                let index = myInventory.indexOf(item);
                myInventory.splice(index, 1);
            }
        } else if (current.includes('Renew')) {
            let item = current.split(' - ').pop();
            if (myInventory.includes(item)) {
                let index = myInventory.indexOf(item);
                let change = myInventory.splice(index, 1)[0];
                myInventory.push(change);
            }
        } else {
            let [oldItem, newItem] = current.split(' - ').pop().split(':');
            if (myInventory.includes(oldItem)) {
                let index = myInventory.indexOf(oldItem);
                myInventory.splice(index + 1, 0, newItem);
            }
        }
        i++;
        current = inputArr[i];
    }
    console.log(myInventory.join(', '));
}

inventory([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]);