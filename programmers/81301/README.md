# 3진법 뒤집기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12932)

### 제출한 정답
```js
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3) ;
}
```