const inputData = require('fs').readFileSync('예제.txt').toString().trim().split(' ');
console.log(!inputData[0] ? 0 : inputData.length);