# 표준 내장 객체

[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects)


array <=> object
```js
const arr = [1, 2, 3, 4];

const obj = Object.assign({}, [...arr]); // {0: 1, 1: 2, 2: 3, 3: 4}

const arrObj = Object.entries(obj) // [["0", 1],["1", 2],["2", 3],["3", 4]]
```