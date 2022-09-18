const [A, B] = require('fs').readFileSync('예제.txt').toString().trim().split(' ');
const array = Array.from({length: +A}, (v, idx) => idx + 1);
const spliceArray = [];

let i = 0;

while (array.length) {
    i++;

    if(i === +B) {
        spliceArray.push(array.shift());
        i = 0;
    }

    else {
        array.push(array.shift());
    }
}

console.log(`<${spliceArray.join(', ')}>`)