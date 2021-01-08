function santa(arg1, arg2, arg3) {
    let n = Number(arg1);
    let m = Number(arg2);
    let s = Number(arg3);
    let currentPrint = "";

    for(let i = m; i >= n; i--) {

        if(i % 2 == 0 && i % 3 == 0) {
            if(i == s) {
                break;
            }
            currentPrint += i + " ";
        }
    }
    console.log(currentPrint);

}

santa("1",
    "30",
    "15"
    )