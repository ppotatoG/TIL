# find()

[find()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

`find()` 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.

> ## arr.find(callback[, thisArg])

```js
const arr1 = [5, 12, 8, 130, 44];

console.log(arr1.find(val => val > 10)); // 12
```
