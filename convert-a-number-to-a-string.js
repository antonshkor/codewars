function numberToString(number) {
    let string = "";
    let isMinus = false;
    if(!number)
        return "0";
    else if(number < 0) {
        isMinus = true;
        number = -number;
    }
    while(number > 0){
        string += String.fromCharCode(48 + (number % 10));
        number = Math.floor(number / 10);
    }
    let ans = "";
    for (let i = 0; i < string.length; ++i)
        ans += string[string.length - (1 + i)];
    return (isMinus ? "-" : "") + ans;
}