function solution(num) {
    for(let i = 2; i < num; i++){
        if(num % i === 1) return i;
    }
}
console.log(solution(10));