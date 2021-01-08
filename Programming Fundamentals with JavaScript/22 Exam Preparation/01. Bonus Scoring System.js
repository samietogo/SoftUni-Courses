function bonus(arr) {
    let studentsNum = Number(arr.shift());
    let lecturesNum = Number(arr.shift());
    let bonus = Number(arr.shift());
    arr = arr.map(Number);
    let maxBonus = 0;
    let bestStudent = 0;
    for (let line of arr) {
        let totalBonus = line / lecturesNum * (5 + bonus);
        if (totalBonus >= maxBonus) {
            maxBonus = totalBonus;
            bestStudent = line;
        }
    }
    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${bestStudent} lectures.`);
}

bonus([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]);