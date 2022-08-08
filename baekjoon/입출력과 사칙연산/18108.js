const fs = require('fs'); 

const inputData = fs.readFileSync('예제.txt').toString().trim();

console.log(inputData - 543);