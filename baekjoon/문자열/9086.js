const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [n, ...strs] = input;

const result = strs.reduce((a, c, i) => {
    const str = c.length === 1 ? `${c}${c}` : `${c.slice(0, 1)}${c.slice(-1)}`
    return a += `${str}\n`;
}, '')

console.log(result.trim())