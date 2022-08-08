const fs = require('fs'); 

const inputData = fs.readFileSync('예제.txt').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(Math.floor(A/B));
console.log(A%B);