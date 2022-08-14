const inputData = require('fs').readFileSync('예제.txt').toString().trim().split('\n').splice(1);
inputData.forEach(item => {
    const [l, str] = item.split(' ');
    console.log(str.split('').map(v=>v.repeat(l)).join(''))
})