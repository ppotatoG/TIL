const fs = require('fs'); 

const num = fs.readFileSync('예제.txt').toString().trim();

for(let i = 1; i <= 9; i++) console.log(`${num} * ${i} = ${num * i}`);