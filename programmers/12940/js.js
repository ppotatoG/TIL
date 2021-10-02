function solution(a, b) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    return [gcd(a, b), a * b / gcd(a, b)];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
console.log(solution(72, 30));