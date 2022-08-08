const fs = require('fs'); 

const inputData = fs.readFileSync('예제.txt').toString().split('/n');

console.log(!(inputData%4)&&(inputData%100)||!(inputData%400)?1:0)