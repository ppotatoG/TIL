const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const [str, n] = input;
console.log(str.slice(n - 1, n))