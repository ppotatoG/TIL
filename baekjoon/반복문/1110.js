const inputData = Number(require('fs').readFileSync('예제.txt').toString().trim());

let num = inputData;
let sum = 0;
let i = 0;

while (true) {
    i++;

    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10;

    if(num === inputData) break;
}

console.log(i)

// https://gurtn.tistory.com/34