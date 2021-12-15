function solution(progresses, speeds) {
    let time = [...progresses].map((val, idx) => {
        let num = 0;
        for(let i = val; i < 100; i += speeds[idx]) {
            num++;
        }

        return num;
    });


    let answer = [];

    for(let i = 0; i < time.length; i++){
        if(time[i] !== 0 && (time[i] < time[i + 1] || i === time.length - 1)) {
            answer.push(1);
        }
        else {
            if(time[i] !== 0 && time[i] >= time[i + 1]) {
                let k = i + 1;
                answer.push(1);
                while(time[i] >= time[k]) {
                    if(time[i] < time[k]) break;
                    answer[answer.length - 1] ++;
                    time[k] = 0;
                    k++;
                }
                time[i] = 0;
            }
        }
    }
    
    return answer;
}
// console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
// console.log(solution([20, 99, 93, 30, 55, 10], [5, 10, 1, 1, 30, 5])); // [3, 3]
console.log(solution([5, 5, 5], [21, 25, 20])); // [3]