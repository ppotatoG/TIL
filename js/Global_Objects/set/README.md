# [Set](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)

객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 `유일한 값`을 저장할 수 있습니다.

`Set`으로 중복 제거하기
```js
const arr = ['one', 'two', 'three', 'three', 'three', 'three', 'four', 'four'];
const arrSet = new Set(list); // {"one", "two", "three", "four"}
const setArr = Array.from(arrSet); // ['one', 'two', 'three', 'four']
```