# 정수 제곱근 판별

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12934)

### 제출한 정답
```js
function solution(num) {
    return Number.isInteger(Math.sqrt(num)) ? (Math.sqrt(num) + 1) * (Math.sqrt(num) + 1) : -1;
}
```