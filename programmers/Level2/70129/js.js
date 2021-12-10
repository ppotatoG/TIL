function solution(s) {    
    let delZero = 0;
    let loof = 0;

    while(s = 1){
        if(s.includes('0')) {
            s.replace(/0/, '');
            delZero++;
        }

        else {
            s.toString(2);
        }

        loof++;
    }

    console.log(delZero, loof)
}
console.log(solution('110010101001'));