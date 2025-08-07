const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('');

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const result = alphabet.reduce((a, c) => {
    return a += input.findIndex(v => v === c) + ' '
}, '')

console.log(result.trim())