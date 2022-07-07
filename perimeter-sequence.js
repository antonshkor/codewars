function PerimeterSequence(a){
    let sum = 0;
    while (a){
        sum += a--;
    }
    return sum;
}