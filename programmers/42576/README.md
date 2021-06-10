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

[참고 글](https://soft91.tistory.com/84)

```
let participant = ['aaa', 'bbb', 'ccc', 'ddd', 'wekj', 'pdvxnz', 'zdfnjr', 'kiki']
let completion = ['zdfnjr', 'kiki', 'ccc', 'aaa', 'ddd', 'wekj', 'bbb', 'pdvxnz']

console.log(JSON.stringify(participant) === JSON.stringify(completion)) //false

let participant = ['aaa', 'bbb', 'ccc', 'ddd', 'wekj', 'pdvxnz', 'zdfnjr', 'kiki']
let completion = ['aaa', 'bbb', 'ccc', 'ddd', 'wekj', 'pdvxnz', 'zdfnjr', 'kiki']

console.log(JSON.stringify(participant) === JSON.stringify(completion)) //true
```

```
function solution(participant, completion) {
    participant.filter(x => !completion.includes(x))

    var answer = participant.filter(x => !completion.includes(x))

    return answer
}

solution(participant, completion)
```
정답이 아니라는게 놀랍다

[내가 처음 원했던 방법과 유사한 글](https://miiingo.tistory.com/338)

정답이 아닌 이유는 반환되는 값이 달라서 인 것 같다
프로그래머스에 나와있는 retrun 값은 "leo", 내 콘솔에 찍히는 값은 ["vinko"]