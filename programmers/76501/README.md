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

map.. 을 쓸 수 있지 않을까!

한술 더 떠서 reduce도 map으로 하고싶었는데 그것까진 못했다ㅜ
```js
function solution(a, s) {
    return a.map((c, i) => s[i] === false? a[i] *= -1 : a[i]).reduce((a, b) => a + b);
}
```

signs[i]에 값이 불리언이니 `if (signs[i])`으로도 가능하구나..!

이거 보고 reduce 공부하면 되겠다
```js
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
```