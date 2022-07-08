function rentalCarCost(days) {
    let sum = 0;
    if(days >= 7)
        sum = days * 40 - 50;
    else if(days >= 3)
        sum = days * 40 - 20;
    else
        sum = days * 40;
    return sum;
}