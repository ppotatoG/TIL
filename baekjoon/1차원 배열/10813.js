// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(v => v.split(' ').map(Number));

let input = `5 4
1 2
3 4
1 4
2 2`.split('\n').map(v => v.split(' ').map(Number));

const [[N, M], ...ops] =  input;
const basket = Array.from({ length: N}, (_, i) => i + 1);

for(const [i, j] of ops) {
    const o = basket[i - 1];
    const t = basket[j - 1];

    basket[i - 1] = t;
    basket[j - 1] = o;
}

console.log(basket.join(' '))

/**
1 2 3 4 5
2 1 3 4 5
2 1 4 3 5
3 1 4 2 5
3 1 4 2 5
 */