function solution(s) {
    s.length % 2 == 0? answer = s.substring((s.length / 2 - 1), (s.length / 2 + 1)) : answer = s.substring((s.length / 2 - .5 ), (s.length / 2 + .5))
    return answer
}

const c1 = "abcde";
const c2 = "qwer";

console.log(solution(c1));
console.log(solution(c2));