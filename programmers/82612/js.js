function solution(p, m ,c){
    let arr = [];

    for(let i = 1; i < c + 1; i++){
        if(p =  1 <= p <= 2,500 && 1 <= m <= 1,000,000,000){
            arr.push(p*i)
        }
    }
    let answer = (arr.reduce((a, b) => a + b)) - m;

    return Math.sign(answer) == -1 || Math.sign(answer) == 0 ? 10 : answer;
}

console.log(solution(3, 25, 4))