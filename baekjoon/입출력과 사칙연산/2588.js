const fs = require('fs'); 

const inputData = fs.readFileSync('예제.txt').toString().split('\n');

const A = inputData[1][2] * inputData[0];
const B = inputData[1][1] * inputData[0];
const C = inputData[1][0] * inputData[0];

console.log(A);
console.log(B);
console.log(C);
console.log(A+(B*10)+(C*100));