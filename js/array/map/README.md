# map()

[map()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

`map()` 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

> ## arr.map(callback(currentValue[, index[, array]])[, thisArg])

`callback`
- 새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가집니다.

`currentValue`
- 처리할 현재 요소.

`index` `Optional`
- 처리할 현재 요소의 인덱스.

`array` `Optional`
- `map()`을 호출한 배열.

`thisArg` `Optional`
- `callback을` 실행할 때 `this`로 사용되는 값.

<br>

[map()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) VS [forEach()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

`map` 은 기존 배열에 대해 새로운 배열을 반환

`forEach` 는 array를 가지기 위해 push를 통해 배열을 반들어줘야 함

[참고 블로그](https://velog.io/@claire-euni/js-map%ED%95%A8%EC%88%98%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C)

<br>

모든 배열에 같은 값 곱하기
```js
const list = [1, 2, 3, 3, 3, 3, 4, 4]
let answer = arr.map( num => num*2) // (8) [2, 4, 6, 6, 6, 6, 8, 8]
```