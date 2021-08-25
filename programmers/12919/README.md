# 서울에서 김서방 찾기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12919)

### 제출한 정답
```js
function solution(s) {
    for(let i = 0; i < s.length; i ++){
        if(s[i] == "Kim") return "김서방은 "+i+"에 있다";
    }
}
```

indexOf(`여기`)에 넣으면 index값을 받는다

리팩토링하면 이렇게
```js
function solution(s) {
    return 	"김서방은 "+s.indexOf("Kim")+"에 있다"
}
console.log(solution(["Jane", "Kim"]))
```