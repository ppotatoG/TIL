const fs = require('fs'); 

const input = fs.readFileSync('예제.txt').toString().split('\n').map(Number);

console.log(Math.max.apply(null, input))
console.log(input.findIndex(v=> v === Math.max.apply(null, input)) + 1)