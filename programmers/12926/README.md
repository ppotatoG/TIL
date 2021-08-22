# 시저 암호

[programmers](https://programmers.co.kr/learn/courses/30/lessons/시저 암호)

### 제출한 정답
```js
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