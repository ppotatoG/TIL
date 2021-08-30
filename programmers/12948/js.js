function solution(s) {
    return '*'.repeat(s.length - 4) + s.substring(s.length, s.length - 4);
}
console.log(solution("01033334444"));