function toBinary(n){
    let str = "";
    for(let i = 0; n > 0; ++i, n = Math.floor(n / 2))
        str += String.fromCharCode(48 + (n % 2));
    let ans = "";
    for (let i = 0; i < str.length; ++i)
        ans += str[str.length - (1 + i)];
    let number = 0;
    for(let i = 0; i < ans.length; ++i)
        number = number * 10 + (ans.charCodeAt(i) - 48);
    return number;
}

