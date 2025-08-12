const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(v => v.split(' ').map(Number));

const result = input.reduce((a, c, i) => {
    const currentMax = Math.max(...c);
    const colIndex = c.findIndex(v => v === currentMax);
    
    if (currentMax > a.max) {
        return {
            max: currentMax,
            row: i + 1,
            col: colIndex + 1
        }
    }

    return a;
}, { max: -1, row: 0, col: 0})

console.log(result.max)
console.log(result.row, result.col)