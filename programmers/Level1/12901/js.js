function solution(a, b) {
    const month = [31, 29 ,31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const arr = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    const date = month.slice(0, a).reduce((a, b) => a + b);

    return arr[(date + b) % 7];
}
console.log(solution(5, 23)); // 월 0
console.log(solution(5, 24)); // 화 1
console.log(solution(5, 25)); // 수 2
console.log(solution(5, 26)); // 목 3
console.log(solution(5, 27)); // 금 4
console.log(solution(5, 28)); // 토 5
console.log(solution(5, 29)); // 일 6
console.log(solution(6, 5)); // 일 6