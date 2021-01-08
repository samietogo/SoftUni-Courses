function reception(arr) {
    let hours = 0;
    let students = Number(arr.pop());
    let allEmployees = 0;
    for (let line of arr) {
        allEmployees += Number(line);
    }
    while (students > 0) {
        hours++;
        if (hours % 4 != 0) {
            students -= allEmployees;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}

reception(['1', '2', '3', '45']);