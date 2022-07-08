function fakeBin(string){
    let ans = "";
    for(let i = 0; i < string.length; ++i)
        ans += ((string.charCodeAt(i) < 53) ? '0' : '1');
    return ans;
}