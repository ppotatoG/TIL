function solution(n, lost, reserve) {
    let has = n - lost.length;
    let arr = [];

    for(let i = 0; i < lost.length; i++){
        arr.push(lost[i] - 1);
        arr.push(lost[i]);
        arr.push(lost[i] + 1);
    }

    for(let i = 0; i < reserve.length; i++){
        for(let k = 0; k < arr.length; k++){
            if(reserve[i] === arr[k]) {
                has++;
                break;
            }
            if(has >= n) break;
        }
    }
    return has;
}
console.log(solution(5, [2, 4], [1, 3, 5])); // 5 
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
console.log(solution(12, [1, 2, 3, 4, 8, 9, 10, 11], [9, 10])); // 6