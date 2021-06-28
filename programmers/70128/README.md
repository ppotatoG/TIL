# 코딩테스트 연습 내적

[programmers](https://programmers.co.kr/learn/courses/30/lessons/70128)

## 제한사항
- a, b의 길이는 1 이상 1,000 이하입니다.
- a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

### 제출한 정답
```js
function solution(a, b) {
    let answer = 0 ;

    for(let i = 0; i < a.length; i ++) answer += a[i] * b[i] ;

    // return answer;
    console.log(answer);
}
```
