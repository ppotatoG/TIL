# Array.from()

[Array.from()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

> ## Array.from(arrayLike[, mapFn[, thisArg]])

`arrayLike`
- 배열로 변환하고자 하는유사 배열 객체나 반복 가능한 객체.

`mapFn Optional`
- 배열의 모든 요소에 대해 호출할 맵핑 함수.

`thisArg Optional`
- mapFn 실행 시에 this로 사용할 값.

```js
const newArr = (startNum, endNum) => {
    return Array.from({length : endNum}, (val, idx) => val = startNum + idx);
}

console.log(newArr(2, 5)) // [2, 3, 4, 5, 6]
```