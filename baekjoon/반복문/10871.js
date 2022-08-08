const fs = require('fs'); 

const [min, arr] = fs.readFileSync('예제.txt').toString().split('\n');

console.log(arr.split(' ').filter(v => Number(v) < Number(min.split(' ')[1])).join(' '))