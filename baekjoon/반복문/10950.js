const fs = require('fs'); 

const input = fs.readFileSync('예제.txt').toString().split('\n');

for(let i = 1; i <= input[0]; i++) {
    console.log(input[i].split(' ').reduce((a, b) => (+a) + (+b)));
}