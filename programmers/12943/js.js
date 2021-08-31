function solution(num) {
    let count = 0;

    for(let i = 0; i < 500; i++){
        if(num === 1) break;
        num % 2 == 0 ? num = num / 2 : num = num * 3 + 1;
        count ++;
    }

    return count === 500 ? -1 : count;
}
console.log(solution(1));
console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));