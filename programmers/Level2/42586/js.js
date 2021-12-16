function solution(progresses, speeds) {
    const time = [...progresses].map((val, idx) => Math.ceil((100 - val) / speeds[idx]));
    let answer = [0];
    let maxDay = time[0];

    for(let i = 0; i < time.length; i++){
        if(time[i] <= maxDay) answer[answer.length - 1] ++;
        else {
            maxDay = time[i];
            answer.push(1);
        }
    }
    
    return answer;
}
console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
console.log(solution([20, 99, 93, 30, 55, 10], [5, 10, 1, 1, 30, 5])); // [3, 3]
console.log(solution([5, 5, 5], [21, 25, 20])); // [3]