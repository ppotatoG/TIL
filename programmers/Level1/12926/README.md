# 시저 암호

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12926)

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
    let index;

    return s.split('').map((value) => {
        index = value.charCodeAt() + n;
        if(value === String.fromCharCode(32)) return value;
        else if(value === value.toUpperCase()) return index > 90 ? String.fromCharCode(index - 26) :  String.fromCharCode(index);
        else if(value === value.toLowerCase()) return index > 122 ? String.fromCharCode(index - 26) :  String.fromCharCode(index);
    }).join('');
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

s에 공백이 있을 때 `join(' ')`를 하는게 문제였던 것 같다

사람들이 map으로 하는데는 다 이유가 있었던거야

하루 이상을 갖고있었는데 5점짜리라니 정말 속상하다
```js
function solution(s, n){
    const arr = s.split("");

    let index;

    return s.split('').map((value) => {
        if(value === String.fromCharCode(32)) return String.fromCharCode(32)
        else if(value === value.toUpperCase()){
            index = value.charCodeAt() + n;
            return index > 90 ? value = String.fromCharCode(index - 26) :  value = String.fromCharCode(index);
        } else if(value === value.toLowerCase()) { // 소문자 
            index = value.charCodeAt() + n;
            return index > 122 ? value = String.fromCharCode(index - 26) :  value = String.fromCharCode(index);
        }
    }).join('');
}
```

1. 소문자는 소문자끼리, 대문자는 대문자끼리 커짐
2. s에 공백이 있다고 해서 전체에 공백이 들어가는건 아님

아래 세개만 되도 정답일듯 내가 너무 어렵게 생각했다

```js
console.log(solution('yz', 1)); // za
console.log(solution('z', 2)); // b
console.log(solution('Aa Z z', 2)); // Cc B b
```