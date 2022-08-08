let [a, b, c] = require('fs').readFileSync('예제.txt').toString().split('\n');

let num = String(a * b * c);

for (let i = 0; i <= 9; i++) { 
   console.log(num.split(i + '').length - 1);
}

// https://gurtn.tistory.com/41