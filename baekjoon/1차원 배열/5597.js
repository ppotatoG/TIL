const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);

// const input = [3, 1, 4, 5, 7, 9, 6, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
// const input = [9, 30, 6, 12, 10, 20, 21, 11, 7, 5, 28, 4, 18, 29, 17, 19, 27, 13, 16, 26, 14, 23, 22, 15, 3, 1, 24, 25]

const students = Array.from({length: 30}, (_, i) => i + 1);
const answer = students.filter(student => !input.includes(student));

console.log(answer[0])
console.log(answer[1])