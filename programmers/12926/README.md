# 시저 암호

[programmers](https://programmers.co.kr/learn/courses/30/lessons/시저 암호)

### 제출한 정답
```js
function solution(s, n){
    let arr = s.split("");
    let answer = []

    arr.forEach((item) => {
        if(item.charCodeAt() == 122) answer.push(String.fromCharCode(97 + n - 1))
        else if(item.charCodeAt() == 32) return false;
        else answer.push(String.fromCharCode(item.charCodeAt() + n))
    })

    return s.indexOf(" ") > -1 ? answer.join(" ") :  answer.join("")
}
```

```js
function solution(s, n){
    let arr = s.split("");
    let answer = []

    arr.forEach((item) => {
        
        if(item.charCodeAt() == 122) {
            answer.push(String.fromCharCode(97 + n - 1))
        }else answer.push(String.fromCharCode(item.charCodeAt() + n))
    })

    return answer.join(" ");
}
```
`s`에 공백이 있으면, answer에도 공백이 있어야 한다..

<br>

중복문 내에서 else if를 주고, return 에서 조건문
```js
function solution(s, n){
    let arr = s.split("");
    let answer = []

    arr.forEach((item) => {
        if(item.charCodeAt() == 122) answer.push(String.fromCharCode(97 + n - 1))
        else if(item.charCodeAt() == 32) return false;
        else answer.push(String.fromCharCode(item.charCodeAt() + n))
    })

    return s.indexOf(" ") > -1 ? answer.join(" ") :  answer.join("")
}
```

코드 실행에서는 다 되는데 제출 후 채점하면 하나도 안맞는다!;

1. charCodeAt() == 0 추가
2. z - a, Z - A 추가
3. 정규식 추가

[정규식](http://toyo.dothome.co.kr/?p=153)