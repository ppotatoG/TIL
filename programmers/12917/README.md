# 코딩테스트 연습 문자열 내림차순으로 배치하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12917)

## 제한사항
- str은 길이 1 이상인 문자열입니다.

### 제출한 정답
```js
const arr = s.split("");
const answer =  arr.sort().reverse().join("");
return answer
```