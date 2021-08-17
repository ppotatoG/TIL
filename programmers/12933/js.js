function solution(num) {
    const arr = String(num).split('');

    arr.sort((a, b) => a - b).reverse();
    return Number(arr.sort((a, b) => a - b).reverse().join(''));
}
console.log(solution(118372))