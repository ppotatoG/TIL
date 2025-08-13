const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

const [[N, M], ...arr] = input.split('\n').map(v => v.split(' ').map(Number));
const result = [];

for(let i = 0; i < N; i++) {
    result[i] = [];
    for(let j = 0; j < M; j++) {
        result[i].push(arr[i][j] + arr[i + N][j])
    }
}

console.log(result.map(v => v.join(' ')).join('\n'))