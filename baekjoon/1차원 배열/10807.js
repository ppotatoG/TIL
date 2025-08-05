// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);

let input = `11
1 4 1 2 4 2 4 2 3 4 4
2`.split('\n');

const [_, array, v] = input;

console.log(array.split(' ').filter(a => Number(a) === Number(v)).length)