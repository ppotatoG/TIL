const solution = ( a, b, n ) => {
    let answer = 0;

    while(a <= n) {
        n -= a;
        n += b;
        answer += b;
    }
    
    return answer;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));