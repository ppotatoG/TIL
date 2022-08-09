const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
console.log(new Set(input.map(v => v % 42)).size);