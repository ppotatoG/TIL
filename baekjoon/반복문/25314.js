const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

console.log(Array(Math.ceil(input / 4)).fill('long').join(' ') + ' int');