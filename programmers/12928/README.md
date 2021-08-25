# 약수의 합

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12928?language=javascript)

### 제출한 정답
```js
function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n; i++){
        if(n % i == 0) answer +=i;
    }
    return answer;
}
```