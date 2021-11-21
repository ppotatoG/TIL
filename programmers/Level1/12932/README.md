# 자연수 뒤집어 배열로 만들기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12932)

### 제출한 정답
```js
function solution(num) {
    return String(num).split('').map((num) => Number(num)).reverse();
}
```