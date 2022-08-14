const inputData = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(Number).splice(1);
console.log(inputData.sort((a, b) => a - b).join('\n'));