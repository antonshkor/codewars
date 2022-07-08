function  noSpace(string){
    let ans = "";
    for (let i = 0; i < string.length; ++i)
        if(string[i] != ' ')
            ans += string[i];
    return ans;
}