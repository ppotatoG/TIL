let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').splice(1);

input.forEach(item => {
    const arr = item.split('');
    let count = 0;
    let score = 0;

    arr.forEach(value => {
        value === 'O' ? count ++ : count = 0;
        score += count;
    })

    console.log(score);
})

// https://gurtn.tistory.com/40