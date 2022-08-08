const fs = require('fs'); 

let input = fs.readFileSync('예제.txt').toString().trim().split('\n');

for(let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    console.log(a+b)
}