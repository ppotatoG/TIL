let [, A, , B] = require('fs').readFileSync('예제.txt').toString().trim().split('\n');

A = new Set(A.split(' '));

let answer = '';

for(item of B.split(' ')) A.has(item) ? answer += '1 ' : answer += '0 ';

console.log(answer.trim());