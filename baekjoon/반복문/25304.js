const fs = require('fs'); 

const input = fs.readFileSync('예제.txt').toString().split('\n');

let answer = 0;

for(let i = 2; i <= Number(input[1]) + 1; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    answer += a*b
}

console.log(answer === Number(input[0]) ? 'Yes' : 'No')