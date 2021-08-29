# slice()

[slice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

> ### `slice()` 메소드는 문자열의 일부를 추출하면서 새로운 문자열을 반환합니다.

> str.slice(beginIndex[, endIndex])

```js
let s = '동해물과 백두산이 마르고 닳도록';

console.log(s.slice(3)); // 과 백두산이 마르고 닳도록
console.log(s.slice(-3)); // 닳도록
```
`console.log(s.slice(3))` 배열의 0번째부터 3번째까지
`console.log(s.slice(-3))` 배열의 뒤에서부터 3개