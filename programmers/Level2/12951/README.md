# JadenCase 문자열 만들기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12951)

### 제출한 정답
```js
function solution(s) {
    let arr = s.split(' ');
    
    return arr.map((val) => {
        return Number(val.charAt(0)) !== NaN 
            ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
            : val.toLowerCase();
    }).join(' ');
}
```
