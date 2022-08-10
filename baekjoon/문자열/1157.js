const inputData = require('fs').readFileSync('예제.txt').toString().trim().split('').map(v=>v.toUpperCase());

let answerArray = Array.from(
    {
        length : 26
    }
    , (v, i) => {
        return [String.fromCharCode(65 + i), 0];
    }
);

inputData.forEach(item => {
    const strIndex = item.charCodeAt() - 65;
    answerArray[strIndex][1]++;
})

answerArray = answerArray
    .sort((a, b) => a[1] - b[1])
    .reverse()
    .filter((v, i, a) => v[1] >= a[0][1]);

console.log(answerArray.length > 1 ? '?' : answerArray[0][0]);