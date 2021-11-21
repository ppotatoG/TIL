function solution(min, max) {
    let answer = 0;
    
    for(let i = min ; i < max + 1; i++){
        Number.isInteger(Math.sqrt(i)) ? answer = answer - i : answer = answer + i;
    }

    return answer;
}
console.log(solution(13, 17))