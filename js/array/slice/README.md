# slice()

[slice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

### `slice()` 메서드는 어떤 배열의 `begin`부터 `end`까지(`end` 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.


```js
let arr = [1, 5, 2, 6, 3, 7, 4];

console.log(arr.slice(0, 3)); // [1, 5, 2]
console.log(arr.slice(2, -3)); // [2, 6]
```

`console.log(arr.slice(0, 3));` 배열의 0번째부터 3(2)번째까지

`console.log(arr.slice(2, -3));` 배열의 2번째부터 뒤에서부터 3(4)번째까지
