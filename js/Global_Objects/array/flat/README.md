# flat()

[flat()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

`flat()` 메서드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성합니다.

> ## const newArr = arr.flat([depth])

```js
const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); // (4) [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr2.flat(2)); // (7) [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]
console.log(arr2.flat(Infinity)); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr3 = [1, , 4, , 5];
console.log(arr3.flat()); // (3) [1, 4, 5]

const arr = [1, 2, 3];
console.log(arr.map((el) => [el, el]).flat()); // (6) [1, 1, 2, 2, 3, 3]
```

`중첩된 배열 구조를 정해진 깊이만큼 평탄하게 만들 수 있는 함수`

매개변수로 어느 깊이까지 평탄화할지를 정할 수 있는 depth변수가 있으며, 생략시에는 기본값 1이 적용된다

`Infinity`를 사용하면 하위배열이 없을 때까지 평탄하게 바꾼다

[참고 블로그](https://brunch.co.kr/@swimjiy/22)

[flatMap](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)