// const input = [[5, 4], [1, 2], [3, 4], [1, 4], [2, 2]];
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(v => v.split(' ').map(Number));
const ref = Array.from({length: input[0][0]}, (_, i) => i + 1);

const answer = input.slice(1).reduce((a, c) => {
    const [start, end] = c;
    const reverse = a.slice(start - 1, end).reverse();
    a.splice(start - 1, end - start + 1, ...reverse);
    return a;
}, ref)

console.log(answer.join(' '))