# 음양 더하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/76501)

### 제출한 정답
```js
function solution(a, s) {
    for(let i = 0; i < a.length; i++){
        if(s[i] === false) a[i] *= -1; 
    }

    return a.reduce((a, b) => a + b);
}
```