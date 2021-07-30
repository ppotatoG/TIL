function solution(s) {
    s.length % 2 == 0? answer = s.substring((s.length / 2 - 1), (s.length / 2 + 1)) : answer = s.substring((s.length / 2 - .5 ), (s.length / 2 + .5))
    return answer
}

const c1 = "abcde";
const c2 = "qwer";

// console.log(solution(c1));
// console.log(solution(c2));

//

function solution2(arr, divisor) {
    let answer = []
    arr.forEach(item => {
        if(item % divisor == 0) {
            answer.push(item);
            answer = answer.sort((a, b) => a - b);
        }
    });

    if(answer.length == 0) answer.push(-1);

    return answer;
}

const arr1 = [5, 9, 7, 10];
const divisor1 = 5;

const arr2 = [2, 36, 1, 3];
const divisor2 = 1;

const arr3 = [3, 2, 6];
const divisor3 = 10;

console.log(solution2(arr1, divisor1))
console.log(solution2(arr2, divisor2))
console.log(solution2(arr3, divisor3))