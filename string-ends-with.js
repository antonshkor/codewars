function solution(str1, str2){
    return str1.substr(str1.length-str2.length) === str2;
}