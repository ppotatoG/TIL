const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let result = 0;

for(let i = 1; i <= input[0]; i++) {
    const word = input[i];
    
    let charSet = new Set();
    let prevChar = '';
    let isGroupWord = true;

    for(let j = 0; j < word.length; j++) {
        const char = word[j];
        
        if (char !== prevChar && charSet.has(char)) {
            isGroupWord = false;
            break;
        };

        prevChar = char;
        charSet.add(char);
    }

    if (isGroupWord) result ++;
}

console.log(result);