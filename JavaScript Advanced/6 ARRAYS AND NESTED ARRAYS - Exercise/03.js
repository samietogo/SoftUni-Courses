function addRemoveElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'add') {
            result.push(i + 1);
        } else {
            result.pop();
        }
    }
    if (result.length == 0) {
        return 'Empty';
    } else {
        return result.join('\n');
    }
}

console.log(addRemoveElements(['add', 'add', 'add', 'add']));
console.log(addRemoveElements(['add', 'add', 'remove', 'add', 'add']));
console.log(addRemoveElements(['remove', 'remove', 'remove']));