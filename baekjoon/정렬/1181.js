const inputData = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
inputData.shift();

console.log(
    [...new Set(inputData)]
    .sort((a, b) => {
        if (a.length > b.length) return 1;
        else if (a.length < b.length) return -1;
        else if (a > b) return 1;
        else if (a < b) return -1;
        return 0;
    })
    .join('\n')
);