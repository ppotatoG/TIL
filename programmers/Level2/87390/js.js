function solution(n, left, right) {
    let arr = new Array(n).
    fill(
        new Array(n)
        .fill(0)
        .map((val, idx) => idx + 1)
    );
    
    return arr.map((val, idx) => {
        return val.map((val2, idx2, array) => {
            return val2 <= idx + 1 ? idx + 1 : idx2 + 1;
        })
    })
    .flat(Infinity)
    .slice(left, right + 1);
}
console.log(solution(3, 2, 5)); // [3,2,2,3]
console.log(solution(4, 7, 14)); // [4,3,3,3,4,4,4,4]