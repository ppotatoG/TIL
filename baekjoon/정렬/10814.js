const inputData = require('fs').readFileSync('예제.txt').toString().trim().split('\n').splice(1);

console.log(inputData.sort((a,b)=>a.split(' ')[0] - b.split(' ')[0]).join('\n'));