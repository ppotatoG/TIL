const fs = require('fs'); 

const inputData = fs.readFileSync('예제.txt').toString().split(' ');

const defaultArr = [1, 1, 2, 2, 2, 8];
console.log(defaultArr.map((v, i) => v - inputData[i]).join(' '));