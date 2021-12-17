function solution(n, left, right) {
    return Array.from(
    {
        length : right - left + 1
    }
    , (val, idx) => {
        val = left + idx + 1;

        let col = Math.ceil(val / n);
        let row = val % n === 0 ? n : val % n;
        
        val = val % n === 0 ? n : val % n;

        return val <= col ? col : row;
    });
}
console.log(solution(3, 2, 5)); // [3,2,2,3]
// [1, 2, !3, 1, 2, 3!, 1, 2, 3]
// [1, 2, !3, 2, 2, 3!, 3, 3, 3]
console.log(solution(4, 7, 14)); // [4,3,3,3,4,4,4,4]
// [1, 2, 3, 4, 1, 2, 3, ! 4, 1, 2, 3, 4, 1, 2, 3 !, 4]
// [1, 2, 3, 4, 2, 2, 3, ! 4, 3, 3, 3, 4, 4, 4, 4 !, 4]