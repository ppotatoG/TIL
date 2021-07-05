# reduce()

[reduce](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

[프로그래머스 문제풀이](https://github.com/ppotatoG/TIL/tree/master/programmers/70128)

### 리듀서 함수는 네 개의 인자를 가집니다.

```js
arr.reduce(callback[, initialValue])
```
- 누산기accumulator (acc)
- 현재 값 (cur)
- 현재 인덱스 (idx)
- 원본 배열 (src)

리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 됩니다.

```js
function solution(a, b) {
    let answer = 0 ;

    for(let i = 0; i < a.length; i ++) answer += a[i] * b[i] ;

    console.log(answer);
}
```

```js
function solution(a, b) {
    return a.reduce((total, value, index) => total + value * b[index], 0);
}
```
 
reduce에서 `initialValue`값을 제공한 경우, 누산기값은 `initialValue`값

`initialValue`값을 제공한 경우 cur는 0, 아니면 1부터 시작

---

모든 값 더하기
```js
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = arr1.reduce((a, b) => a + b)
console.log(sum) // 55
```

중복값 찾기(이건 잘 모르겟으니 외우기로..!)
```js
let arr2 = [4, 3, 2, 5, 3, 1, 2, 4, 5, 3, 1]

let reducer = (acc, cur) => {
  if (!acc[cur]) acc[cur] = 1;
  else acc[cur] = acc[cur] + 1;

  return acc; // 돼지꼬리땡야
};

let sorting = arr2.reduce(reducer, {});

console.log(sorting); //{1: 2, 2: 2, 3: 3, 4: 2, 5: 2}
```
