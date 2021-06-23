function solution(x, n){
    const answer = [];

    for(let i = 1; i <= n; i++){
        answer.push(x * i);
    }

    console.log(answer)
}
solution(2, 5)
solution(4, 3)
solution(-4, 2)
