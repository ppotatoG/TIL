function solution(arr, num) {
    return arr.sort((a, b) => {
        if(a[num] < b[num]) return -1;
        else if(a[num] > b[num]) return 1;
        else if(a[num] == b[num]) {
            a - b;
        }
    });
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));