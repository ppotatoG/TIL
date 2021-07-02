# 코딩테스트 연습 문자열 내림차순으로 배치하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12917)

## 제한사항
- str은 길이 1 이상인 문자열입니다.

### 제출한 정답
```js
function solution(s) {
    var answer = s.split("");
    answer = answer.sort().reverse().join("");
    return answer;
}
```

return 내에서 저게 어떻게 왜 되는거지 ?
```js
function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}
```