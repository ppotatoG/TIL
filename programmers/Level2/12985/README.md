# 예상 대진표

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12985)

### 제출한 정답

처음엔 `n`으로 최대값을 주고 `while`문 안에 포함했었는데, 막상 짜고보니 필요없어보여서 뺏다

중복문에 들어가는 순간부터 경기 시작이라 `answer = 1`

각 `a`, `b`는 2로 나누어 올림한 값으로 다음 라운드 수가 결정된다

`return answer`도 원래는 `Math.abs(a - b) === 1`이였는데 각 2, 3이면 맞는 값이 아니다

얘네도 똑같이 2로 나누어 올림한 값이 같으면 해당 라운드에서 붙는다

```js
function solution(n, a, b) {
    let answer = 1;
    while(true){
        if (Math.ceil(a / 2) === Math.ceil(b / 2)) return answer;
        answer ++;
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
    }
}
```