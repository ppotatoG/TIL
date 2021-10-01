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


README 쓰는걸 까먹었으니 지금이라도 쓰자!
index값이 26보다 클 때 -=26을 해줘야하는데 그게 잘 안된다
```js
function solution(s, n){
    let answer = [];

    const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lower = [...upper].map((cur) => cur.toLowerCase());

    const arr = s.split('').filter((cur) => cur !== ' ');

    arr.forEach((item, i) => {
        if(upper.indexOf(item) >= 0){
            answer.push(upper.indexOf(item) + n)
        }
    })

    return s.indexOf(' ') >= 0 ? answer.join(' ') : answer.join('');
}
```

슬슬 짜증나니까 처음부터 다시 해보자 이제 좀 알거같아

<br>

알기는 무슨,,, 9번부터 13번까지는 실패다
```js
function solution(s, n){
    const arr = s.split("").filter((value) => value !== ' ');
    let answer = []

    while(n > 26) n -=26;

    let index;

    arr.forEach((item) => {
        if(item === item.toUpperCase()) { // 대문자
            index = item.charCodeAt() + n;
            index > 90 ? answer.push(String.fromCharCode(index - 26)) :  answer.push(String.fromCharCode(index));
        } else if(item === item.toLowerCase()) { // 소문자 
            index = item.charCodeAt() + n;
            index > 122 ? answer.push(String.fromCharCode(index - 26)) :  answer.push(String.fromCharCode(index));
        }

    })

    return s.indexOf(" ") > -1 ? answer.join(" ") :  answer.join("");
}
```