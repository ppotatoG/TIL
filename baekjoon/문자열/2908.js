const [A, B] = require('fs').readFileSync('예제.txt').toString().trim().split(' ').map(v=>v.split('').reverse().join(''));
console.log(+A > +B ? A : B)