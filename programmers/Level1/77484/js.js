function solution(lottos, win_nums) {
    lottos.sort((a, b) => a - b);
    win_nums.sort((a, b) => a - b);

    const arr = [];

    for(let i = 0; i < lottos.length; i++){
        for(let k = 0; k < lottos.length; k++){
            if(lottos[i] === 0) {
                arr[i] = 0;
            }
            else if(lottos[i] === win_nums[k]) {
                arr[i] = true;
            }
        }
    }
    const result = new Array(6).fill(0).map((val, idx) => val = idx + 1).reverse();

    const same = arr.filter((val) => val === true).length;
    const blank = arr.filter((val) => val === 0).length;

    return [result[same + blank === 0 ? 0 : same + blank - 1], result[same === 0 ? 0 : same - 1]]
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]