const fs = require('fs'); 

let [A, B] = fs.readFileSync('예제.txt').toString().split(' ').map(v => Number(v));

B -= 45;

if (B < 0) {
    B += 60;
    A--;
    if (A === -1) {
        A = 23;
    }
}

console.log(`${A} ${B}`)