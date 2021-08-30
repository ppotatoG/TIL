# 핸드폰 번호 가리기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12948)

### 제출한 정답

```js
function solution(s) {
    return '*'.repeat(s.length - 4) + s.substring(s.length, s.length - 4);
}
```