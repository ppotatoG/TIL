function solution(s) {
    const arr = s.split('');
    const answer = [];

    for(let i = 0; i < arr.length; i++){
        if(answer[answer.length - 1] === arr[i]) answer.pop();
        else answer.push(arr[i]);
    }

    return answer.length === 0 ? 1 : 0;
}
console.log(solution('baabaa')); // 1
console.log(solution('cdcd')); // 0