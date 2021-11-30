# Array

### reduce

`reduce`로 많은것이 가능하다..!

(sort도 가능할 것 같은데..!)

[참고 github](https://github.com/BKJang/do-you-know-vanilla/issues/28)

[내가 정리한 reduce](https://github.com/ppotatoG/TIL/tree/master/js/array/reduce)

---

### 배열 내에서 중복 제거

<br>

#### 1. filter 안에서 indexOf 사용
```js
const test = arr.filter((a, b) => {
    return arr.indexOf(a) === b;
});
```
<br>

#### 2. 중복문 내에서 조건문으로 indexOf 사용하여 배열에 값 추가
```js
let test = []

for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) == i) test.push(arr[i])
}
```
- 중복문사용으로 1번보다 비효율적이지 않을까 ?

---

배열에 추가 또는 삭제하기

- 배열 맨 앞에 추가하기 [`unshift() `](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
- 배열 맨 뒤에 추가하기 [`push()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

- 배열 맨 앞 요소를 삭제하기 [`shift() `](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- 배열 맨 뒤 요소를 삭제하기 [`pop()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

```js
const arr = [1, 2, 3, 4, 5];
```

- 배열 맨 앞 요소를 맨 뒤에 추가하기
```js
arr.push(arr.shift()) // [2, 3, 4, 5, 1]
```

- 배열 맨 뒤 요소를 맨 앞에 추가하기
```js
arr.unshift(arr.pop()) // [5, 1, 2, 3, 4]
```