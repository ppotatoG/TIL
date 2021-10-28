function solution(n, lost, reserve) {
    let answer = new Array(n).fill(1);
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    for(let i = 0; i < lost.length; i++){
        for(let k = 0; k < reserve.length; k++){
            if(lost[i] === reserve[k]) {
                reserve.splice(k, 1);
                lost.splice(i, 1);
                i--;
                k--;
                break;
            }
        }
    }

    for(let i = 0; i < lost.length; i++){
        answer[lost[i] - 1] = 0
    }

    console.log(reserve, answer)

    for(let i = 0; i < answer.length; i++){
        if(answer[i] === 0) {
            if (answer[i - 1] === 1) {
                answer[i]++;
                answer[i - 1]--;
            } else if (answer[i + 1] === 1) {
                answer[i]++;
                answer[i + 1]--;
            }
        }
    }

    return answer;
    return answer.filter((val) => val !== 0).length;
}
// console.log(solution(5, [2, 4], [1, 3, 5])); // 5 
// console.log(solution(5, [2, 4], [3])); // 4
// console.log(solution(3, [3], [1])); // 2
console.log(solution(12, [1, 2, 3, 4, 8, 9, 10, 11], [9, 10])); // 6
// console.log(solution(10, [5, 4, 3, 2, 1, 15], [15, 3, 1, 2, 5, 4])); // 10
// console.log(solution(2, [2, 1], [1, 2])); // 2
console.log(solution(10, [5, 7, 9], [1, 2, 3, 4, 6, 8])); // 10