function solution(p, m ,c){
    let tmp = 0;

    for(let i = 1; i < c + 1; i++){
        tmp = tmp + p*i;
    }

    return tmp <= m ? 0 : Math.abs(tmp) - m;
}

console.log(solution(3, 20, 4))