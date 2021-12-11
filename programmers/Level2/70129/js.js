function solution(s) {    
    let delZero = 0;
    let loof = 0;

    while(s >= 1){
        if(s.includes('0')) {
            while(s.includes('0')){
                s = s.replace(/0/, '');
                delZero++;
            }
        }
        s = s.length.toString(2);
        loof++;

        if(s == 1) break;
    }

    return [loof, delZero]
}
console.log(solution('110010101001'));