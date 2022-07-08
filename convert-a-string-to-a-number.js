const stringToNumber = function(string){
    let number = 0;
    let isMinus = false;
    if(string[0] === '-'){
        isMinus = true;
        string = string.substr(1);
    }
    for(let i = 0; i < string.length; ++i)
        number = number * 10 + (string.charCodeAt(i) - 48);
    return (isMinus ? -1 : 1) * number;
}
