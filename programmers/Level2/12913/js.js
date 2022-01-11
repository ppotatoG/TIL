function solution(land) {
    let arr = [];
    
    for(let i = 0;i < land.length; i++){
        if(i !== 0) {
            let maxIdx = land[i - 1].findIndex(val => val === arr[i - 1]);
            land[i].splice(maxIdx, 1);
        }
        let max = Math.max.apply(null, land[i]);
        arr.push(max);
    }

    return arr.reduce((a, b) => a + b, 0);
}
console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]])); // 16
console.log(solution([[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]])); // 20