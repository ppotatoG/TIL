const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(v => v.split(' ').map(Number));

let input = `5 4
1 2 3
3 4 4
1 4 1
2 2 2`.split('\n').map(v => v.split(' ').map(Number));

const max = input[0][0];
const counts = input.slice(1);

const answer = new Map();

for(let i = 1; i <= max; i ++) {
    answer.set(i, 0);    
}

for(let i = 0; i < counts.length; i ++) {
    const [start, end, c] = counts[i];
    for(let j = start; j <= end; j ++) {
        answer.set(j, c);
    }
}

console.log([...answer.values()].join(' '))