const fs = require('fs'); 

const input = fs.readFileSync('예제.txt').toString().trim();
let answer = 0;
for(let i = 1; i <= input; i++) answer += i;

console.log(answer);