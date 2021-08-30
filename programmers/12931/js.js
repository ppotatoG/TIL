function solution(n) {
    return n.toString().split("").reduce((a, b) => Number(a) + Number(b), 0);
}
console.log(solution(123));
console.log(solution());