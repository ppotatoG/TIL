// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const input = `3
3 7
15 7
5 2`.trim().split('\n');

let paper = Array.from({length: 100}, () => Array.from({length: 100}, () => 0));

for(let i = 1; i <= input[0]; i++) {
    const [pointX, pointY] = input[i].split(' ').map(point => Number(point) - 1);
    
    for(let x = pointX; x < pointX + 10; x++) {
        for(let y = pointY; y < pointY + 10; y++) {
            paper[x][y] = 1;
        }
    }
}

console.log(paper.reduce((a, c) => a += c.filter(v => v === 1).length, 0));