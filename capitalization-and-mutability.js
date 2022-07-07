function firstCharToUpperCase(string){
    return String.fromCharCode(string[0].charCodeAt(0) - 32) + string.substr(1);
}
