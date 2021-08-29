const text = "안녕? Hi! 123456789.0";
const numRegex = /[^0-9]/g;
const txtRegex = /[0-9]/g;

const numResult = t => t.replace(numRegex, "");
const txtResult = t => t.replace(txtRegex, "");

console.log(numResult(text));
console.log(txtResult(text));

function solution(s) {
    return s.replace(/\d(?=\d{4})/g, '*');
}
console.log(solution("01033334444"));