function solution(num) {
    return String(num).split('').map((num) => Number(num)).reverse();
}
console.log(solution(0))