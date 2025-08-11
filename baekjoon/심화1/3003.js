const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(' ');

const set = [1, 1, 2, 2, 2, 8];

const result = set.reduce((a, c, i) => {
    return a += ` ${c - input[i]}`
}, '')

console.log(result.trim());