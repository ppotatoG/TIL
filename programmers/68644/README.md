# 코딩테스트 연습 두 개 뽑아서 더하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/68644)

## 재한사항
- numbers의 길이는 2 이상 100 이하입니다.
- numbers의 모든 수는 0 이상 100 이하입니다.


### 제출한 정답
```
function solution(s) {
    var answer = '';

    answer = s.length%2 == 0 ? s.charAt(s.length/2 - 1) + s.charAt(s.length/2) : s.charAt(s.length/2)

    // console.log(answer)
    return answer
}
```