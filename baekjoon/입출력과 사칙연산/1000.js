const [A, B] = require('fs').readFileSync('예제.txt').toString().split(' ');
console.log(A+B);