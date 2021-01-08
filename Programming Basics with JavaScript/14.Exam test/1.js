function agency(arg1, arg2, arg3, arg4, arg5) {
    let name = arg1;
    let adultTickets = Number(arg2);
    let kidsTicket = Number(arg3);
    let netAdultPrice = Number(arg4);
    let fee = Number(arg5);
    let money = 0;
    let profit = 0;
    let netKidsPrice = netAdultPrice * 0.3 + fee;

    netAdultPrice += fee;
    money = (adultTickets * netAdultPrice) + (kidsTicket * netKidsPrice);
    profit = money * 0.2;

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);
}

agency("WizzAir",
    "15",
    "5",
    "120",
    "40"
    )