# 프로그래머스 코딩테스트

[코딩테스트/모든문제](https://programmers.co.kr/learn/challenges)

### 42748 K번째수

제출 답안
```
function solution(a, c) {
    let answer = []
    for(let i = 0; i < c.length; i++){

        let b = a.slice(c[i][0] - 1, c[i][1]).sort(function(a, b){
            if(a > b) return 1
            else if(a === b) return 0
            else return -1
        })
    
        answer.push(b[c[i][2] - 1])
    }
    return answer
}
```
[sort TIL](https://github.com/ppotatoG/TIL/tree/master/js/array/sort)

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
[sort MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)