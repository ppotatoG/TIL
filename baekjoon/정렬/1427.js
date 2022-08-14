const inputData = require('fs').readFileSync('예제.txt').toString().trim().split('').map(Number);
console.log(inputData.sort((a, b) => a - b).reverse().join(''));