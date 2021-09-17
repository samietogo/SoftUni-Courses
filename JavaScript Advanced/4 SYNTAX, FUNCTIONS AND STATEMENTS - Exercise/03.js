function sameNumbers(a) {
    let myStr = a.toString();
    let sum = 0;
    let same = true;
    for (let i = 0; i < myStr.length; i++) {
        sum += Number(myStr[i]);
        if (Number(myStr[i]) != Number(myStr[i + 1]) && i != myStr.length-1) {
            same = false;
        }
    }
    console.log(same);
    console.log(sum);
}
sameNumbers(2225222)
//console.log(sameNumbers(2222222));