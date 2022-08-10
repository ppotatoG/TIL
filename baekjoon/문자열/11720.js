const [A, B] = require('fs').readFileSync('예제.txt').toString().trim('').split('\n');
console.log(B.split('').reduce((a, b) => +a + +b));