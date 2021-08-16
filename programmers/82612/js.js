function solution(p, m ,c){
    let arr = [];

    for(let i = 1; i < c + 1; i++){
        arr.push(p*i);
    }
    
    return arr.reduce((a, b) => a + b) <= m ? 0 : arr.reduce((a, b) => a + b) - m;
}

console.log(solution(3, 40, 4))