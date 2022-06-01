# 알고리즘 해시

[코딩테스트 연습 > 해시](https://programmers.co.kr/learn/courses/30/parts/12077)

### [완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576)

[TIL/programmers/Level1/42576/](https://github.com/ppotatoG/TIL/tree/master/programmers/Level1/42576)

```js
const solution = (participant, completion) => {

    participant.sort();
    completion.sort();

    return participant.filter((val, idx) => val !== completion[idx])[0]
}
```