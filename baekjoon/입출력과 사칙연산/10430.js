const fs = require('fs'); 

const inputData = fs.readFileSync('예제.txt').toString().split(' ');
const A = Number(inputData[0]);
const B = Number(inputData[1]);
const C = Number(inputData[2]);

console.log((A+B)%C);
console.log(((A%C)+(B%C))%C);
console.log((A*B)%C);
console.log(((A%C)*(B%C))%C);