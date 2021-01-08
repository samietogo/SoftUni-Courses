function OddBarCode(input) {
    let firstNum = Number(input[0]);
    let firstNumStr = firstNum + "";
    let secNum = Number(input[1]);
    let secNumStr = secNum + "";
    let fN1 = Number(firstNumStr[0]);
    let fN2 = Number(firstNumStr[1]);
    let fN3 = Number(firstNumStr[2]);
    let fN4 = Number(firstNumStr[3]);
    let sN1 = Number(secNumStr[0]);
    let sN2 = Number(secNumStr[1]);
    let sN3 = Number(secNumStr[2]);
    let sN4 = Number(secNumStr[3]);
    let isOdd = true;
    let print = ""
    for (let i = firstNum; i <= secNum; i++) {
        isOdd = true;
        let currentNum = "" + i;
        let digit1 = Number(currentNum.charAt(0));
        let digit2 = Number(currentNum.charAt(1));
        let digit3 = Number(currentNum.charAt(2));
        let digit4 = Number(currentNum.charAt(3));
        if ((digit1 % 2 == 0) || (digit2 % 2 == 0) || (digit3 % 2 == 0) || (digit4 % 2 == 0)) {
            isOdd = false;
            continue;
        } else if (digit1 < fN1 || digit1 > sN1) {
            isOdd = false;
            continue;
        } else if (digit2 > sN2 || digit2 < fN2) {
            isOdd = false;
            continue;
        } else if (digit3 > sN3 || digit3 < fN3) {
            isOdd = false;
            continue;
        } else if (digit4 > sN4 || digit4 < fN4) {
            isOdd = false;
            continue;
        }
        if (!isOdd) {
            continue;
        } else {
            print += currentNum + " ";
            continue;
        }
    }
    console.log(print);
}

OddBarCode(["2345",
    "6789"
    ])