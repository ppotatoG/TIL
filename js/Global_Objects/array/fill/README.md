# fill()

## [fill](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/fill)

>`fill()` 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.

> ### arr.fill(value[, start[, end]])

- `value`
배열을 채울 값.

- `start Optional`
시작 인덱스, 기본 값은 0.

- `end Optional`
끝 인덱스, 기본 값은 this.length.


```js
let arr1 = [1, 2, 3, 4]; 

console.log(arr1.fill(1)); // [1, 1, 1, 1]

console.log(new Array(10).fill(false, 0, 10)) // [false, false, false, false, false, false, false, false, false, false]
```