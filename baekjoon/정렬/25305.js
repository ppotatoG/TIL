const [inputData, C] = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
const N = inputData.split(' ')[1];
console.log(C.split(' ').sort((a, b) => a - b).splice(N*-1)[0]);