# 프로그래머스 코딩테스트

[코딩테스트/모든문제](https://programmers.co.kr/learn/challenges)

### 42576 완주하지 못한 선수 

제출 답안
```
function solution(participant, completion) {
    
    participant.sort()
    completion.sort()

    for(let i = 0 ; i < participant.length; i++){
        if(participant[i] !== completion[i]) return participant[i];
    }
}
```
[sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)