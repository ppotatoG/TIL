function solution(n, lost, reserve) {
    let has = n - lost.length;
    let arr = [];

    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    for(let i = 0; i < lost.length; i++){
        for(let k = 0; k < reserve.length; k++){
            // console.log(lost[i], reserve[k])
            if(lost[i] === reserve[k]) {
                lost.splice(i, 1);
                reserve.splice(k, 1);
                has ++;
            }
        }
    }

    for(let i = 0; i < lost.length; i++){
        arr.push(lost[i] - 1);
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
// console.log(solution(5, [2, 4], [1, 3, 5])); // 5 
// console.log(solution(5, [2, 4], [3])); // 4
// console.log(solution(3, [3], [1])); // 2
// console.log(solution(12, [1, 2, 3, 4, 8, 9, 10, 11], [9, 10])); // 6
console.log(solution(10, [5, 4, 3, 2, 1, 15], [15, 3, 1, 2, 5, 4])); // 10