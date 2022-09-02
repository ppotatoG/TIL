const input = require('fs').readFileSync('예제.txt').toString().split('\n');

for(let i = 1; i <= input[0]; i++) {
    const arr = input[i].split(' ').splice(1).map(Number);
    const average = arr.reduce((a, c) => a += c, 0) / input[i][0];

    console.log(`${(arr.filter(v=>v>average).length / arr.length * 100).toFixed(3)}%`);
}

// https://gurtn.tistory.com/45