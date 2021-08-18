# filter()

> ## arr.filter(callback(element[, index[, array]])[, thisArg])

`callback`
- 각 요소를 시험할 함수. `true`를 반환하면 요소를 유지하고, `false`를 반환하면 버립니다. 다음 세 가지 매개변수를 받습니다.

 `element`
- 처리할 현재 요소.

`index` `Optional`
- 처리할 현재 요소의 인덱스.

`array` `Optional`
- filter를 호출한 배열.

`thisArg` `Optional`
- callback을 실행할 때 this로 사용하는 값.

[filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```js
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9]

a = a.filter((b) => b%2 == 0) // [2, 4, 6, 8]
b = b.filter((a) => a !== 1) // [2, 3, 4, 5, 6, 7, 8, 9]
```

```js
const arr1 = [2, 3, 3, 4, 4, 5, 5, 5, 6, 7]

const answer1 = arr1.filter((a, b) => {
    return arr1.indexOf(a) === b;
});

console.log(answer1) // (6) [2, 3, 4, 5, 6, 7]
```

```js
const arr2 = [5, 9, 7, 10]
const divisor = 5

const answer2 = arr2.filter((a) => {
    return a % divisor == 0
})

console.log(answer2) // [5, 10]
```

---

[프로그래머스 답변](https://programmers.co.kr/learn/courses/30/lessons/12906/solution_groups?language=javascript)으로 공부하기

```js
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
```
이것도 그냥 외우자~!