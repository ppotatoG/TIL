const fs = require('fs'); 

const inputData = fs.readFileSync('예제.txt').toString().split(' ');

const [A, B] = inputData;

console.log(Number(A)>Number(B)?'>':Number(A)<Number(B)?'<':'==');