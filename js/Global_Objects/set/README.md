# [Set](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)

객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 `유일한 값`을 저장

### `Set`으로 중복 제거하기
```js
const arr = ['one', 'two', 'three', 'three', 'three', 'three', 'four', 'four'];
const arrSet = new Set(list); // {"one", "two", "three", "four"}
const setArr = Array.from(arrSet); // ['one', 'two', 'three', 'four']
```

```js
const set = new Set([1, 2, 3, 4, 5]);
```

### 추가
```js
set.add(6) // {1, 2, 3, 4, 5, 6};
```

### 삭제
```js
set.delete(1) // {2, 3, 4, 5, 6}
```

### 포함여부
```js
set.has(5) // true
set.has(7) // false
```

### 요소의 총 개수
```js
set.size // 5
```


### 초기화
```js
set.clear() // Set(0) {size: 0}
```

### (o)
- 중복제거
- 전체 순회할 필요성이 있는 경우
- 값의 유무 판단

### (x)
- 특정 요소에 접근
- 인덱스가 필요한 경우