const fs = require('fs'); 

let [time, C] = fs.readFileSync('예제.txt').toString().split('\n');
let [A, B] = time.split(' ');

const solution = (a, b, c) => {
    b += c

    while(b >= 60) {
        b -= 60
        a += 1
    }

    a %= 24;
    console.log(a, b)
}

solution(+A, +B, +C);