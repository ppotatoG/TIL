const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('');

if (input.length === 1) {
    console.log(1);
} else {
    const length = Math.floor(input.length / 2)
    const front = input.slice(0, length)
    const back = input.slice(-length)

    console.log(front.join('') === back.reverse().join('') ? 1 : 0);
}
