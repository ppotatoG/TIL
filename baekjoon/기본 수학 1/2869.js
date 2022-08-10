const [A, B, C] = require('fs').readFileSync('예제.txt').toString().trim('').split(' ').map(Number);
let sum = 0;
let count = 0;

while(sum < C) {
    sum = sum+A-B;
    count++;
}

console.log(count)

// https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-2869%EB%B2%88-Node.js-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4