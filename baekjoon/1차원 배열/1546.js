const score = require('fs').readFileSync('예제.txt').toString().trim().split('\n')[1].split(' ').map(Number);
const maxVal = [...score].sort((a, b) => a - b).reverse()[0];

console.log(
(    score.map(v => v / maxVal * 100)
    .reduce((a, c) => a += c)
) / score.length
);