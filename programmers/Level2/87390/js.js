function solution(n, left, right) {
    return Array.from(
        {
            length : right - left + 1
        }
        , (val, idx) => {
            val = (left + idx + 1) % n;
            val = val === 0 ? n : val;

            return val <= n ? val : val % n;
        });

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
    .flat(Infinity);
}
console.log(solution(3, 2, 5)); // [3,2,2,3]
// [1, 2, !3, 1, 2, 3!, 1, 2, 3]
// [1, 2, !3, 2, 2, 3!, 3, 3, 3]
console.log(solution(4, 7, 14)); // [4,3,3,3,4,4,4,4]
// [1, 2, 3, 4, 1, 2, 3, ! 4, 1, 2, 3, 4, 1, 2, 3 !, 4]
// [1, 2, 3, 4, 2, 2, 3, ! 4, 3, 3, 3, 4, 4, 4, 4 !, 4]