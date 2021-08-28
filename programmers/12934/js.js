function solution(num) {
    return Number.isInteger(Math.sqrt(num)) ? (Math.sqrt(num) + 1) * (Math.sqrt(num) + 1) : -1;
}

console.log(solution(121));
console.log(solution(3));