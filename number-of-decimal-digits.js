function digits(number) {
    let answer = 0;
    if(!number)
        ++answer;
    while (number > 0){
        number = Math.floor(number / 10);
        ++answer;
    }
    return answer
}
