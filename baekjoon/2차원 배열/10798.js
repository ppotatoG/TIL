const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(v => v.split(''));

const H = input.length;
const W = Math.max(...input.map(c => c.length));

let result = '';
for(let i = 0; i <= W; i++) {
    for(let j = 0; j <= H; j++) {
        if (input[j][i] !== undefined) {
            result += input[j][i];
        }
    }
}

console.log(result);