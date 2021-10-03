function solution(d, budget){
    d.sort();

    let i = 0;
    let sum = 0;

    while(sum < budget) {
        i++;
        sum += d[i];
    }

    return d.length === 1 && d > budget? 0 : i;
}

console.log(solution([1,3,2,5,4], 9)); // 3
console.log(solution([2,2,3,3], 10)); // 4
console.log(solution([11], 10)); // 0
console.log(solution([11, 12, 1, 2], 10)); // 2