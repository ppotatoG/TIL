function solution(s) {
    let minLen = s.length;

    top: for (let n = 1; n <= s.length / 2; n++) {
        let curLen = 0;
        for (let i = 0; i < s.length; i += n) {
            let counter = 1;
            while (s.slice(i, i + n) === s.slice(i + n, i + 2 * n)) {
                i += n;
                counter++;
            }
            if (counter !== 1) {
                curLen += n + (counter + "").length;
            } else {
                curLen += s.length < i + n ? s.slice(i, i + n).length : n;
            }
            if (minLen <= curLen) continue top;
        }
        minLen = curLen;
    }

    return minLen;
}

console.log(solution('aabbaccc')); // 7
console.log(solution('ababcdcdababcdcd'));// 9
console.log(solution('abcabcdede'));// 8
console.log(solution('abcabcabcabcdededededede'));// 14
console.log(solution('xababcdcdababcdcd'));// 17