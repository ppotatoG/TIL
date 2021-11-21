function solution(arr, num) {
    return arr.sort((a, b) => {
        return a[num] == b[num] ? (a > b) - (a < b) : (a[num] > b[num]) - (a[num] < b[num]);
    });
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));