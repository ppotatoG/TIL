// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf-8').trim().split('\n');


const input = `ljes=njak`.trim();
// lj / e / s= / nj / a / k

// const input = 'ddz=z=' // 3
// const input = 'nljj' // 3
// const input = 'c=c=' // 2
// const input = 'dz=ak' // 3

const CROATIA_LIST = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

const isCroatiaCount = (word) => {
    for(let i = 0; i < word.length; i ++) {
        for(let j = 1; j <= word.length; j ++) {
            const letter = word.slice(i, j);
            const isCroatia = CROATIA_LIST.find(v => v === letter);

            if (!!isCroatia) {
                word = word.replace(letter, '*')
                break;
            }
        }
    }

    return word
}

console.log(isCroatiaCount(input).length)