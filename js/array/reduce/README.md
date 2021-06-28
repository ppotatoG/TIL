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