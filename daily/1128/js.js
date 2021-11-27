function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    let Lost = lost.filter((val) => !reserve.includes(val));
    let Reserve = reserve.filter((val) => !lost.includes(val));

    return n - Lost.filter((val) => {
        let extra = Reserve.find((val2) => Math.abs(val2 - val) <= 1);
        console.log(extra)
        if(!extra) return true;
        Reserve = Reserve.filter((val2) => val2 !== extra);
    }).length;
}

console.log(solution(12, [1, 2, 3, 4, 8, 9, 10, 11], [9, 10])); // 6
console.log(solution(5, [2, 4], [1, 3, 5])); // 5 
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
console.log(solution(10, [5, 4, 3, 2, 1, 15], [15, 3, 1, 2, 5, 4])); // 10
console.log(solution(2, [2, 1], [1, 2])); // 2
console.log(solution(10, [5, 7, 9], [1, 2, 3, 4, 6, 8])); // 10