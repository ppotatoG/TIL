function solution(num) {
    return Number(String(num).split('').sort((a, b) => a - b).reverse().join(''));
}
console.log(solution(118372))