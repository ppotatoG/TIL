const fs = require('fs'); 

const inputData = fs.readFileSync('예제.txt').toString().trim();

console.log(Number(inputData)>=90?'A':Number(inputData)>=80&&Number(inputData)<=89?'B':Number(inputData)>=70&&Number(inputData)<=79?'C':Number(inputData)>=60&&Number(inputData)<=69?'D':'F');