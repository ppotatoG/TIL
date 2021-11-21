function solution(d, budget){
    d.sort((a, b) => a - b);

    let count = 0;
    let sum = 0;

    for(let i = 0; i < d.length; i ++){
        sum += d[i];
        count ++;
        if(sum > budget) {
            count --;
            break;
        }
    }

    return count;
}
console.log(solution([1,3,2,5,4], 9)); // 3
console.log(solution([2,2,3,3], 10)); // 4
console.log(solution([11], 10)); // 0