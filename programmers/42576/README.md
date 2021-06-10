# 코딩테스트 연습 완주하지 못한 선수

[programmers](https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript)

## 제한사항
1. 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
2. completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
3. 참가자 중에는 동명이인이 있을 수 있습니다.

```
for(let i = 0; i < participant.length; i++){

    if(participant[i] !== completion[i]) console.log(i)

}
```
이렇게 되면, 배열의 값이 아닌 순서로 비교하게 되어 안된다