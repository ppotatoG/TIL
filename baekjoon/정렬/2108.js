const inputData = require('fs').readFileSync('예제.txt').toString().trim().split('\n').splice(1).map(Number).sort((a,b)=>a-b);
const a = Math.round(inputData.reduce((a,c)=>a+= c)/inputData.length);
const b = inputData[(inputData.length - 1)/2];

function c(array) {
    const map = new Map();
    for (let i = 0; i < inputData.length; i++) {
        if (!map.has(array[i])) {
            map.set(array[i], 1);
        } else {
            map.set(array[i], map.get(array[i]) + 1);
        }
    }

    let maxValue = 0;
    let answer = [];

    map.forEach((element, key) => {
        if (maxValue < element) {
            maxValue = element;
            answer = [];
            answer.push(key);
        } else if (maxValue === map.get(key)) {
            answer.push(key);
        }
    });

    return answer.length !== 1 ? answer[1] : answer[0];
}

const d = [...inputData].pop() - [...inputData].shift();

console.log(a === -0 ? 0 : a);
console.log(b);
console.log(c(inputData));
console.log(d);