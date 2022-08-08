const fs = require('fs'); 

const input = fs.readFileSync('예제.txt').toString().split('\n')[1].split(' ').map(Number);

console.log(input)
console.log(Math.min.apply(null, input)+' '+Math.max.apply(null, input))