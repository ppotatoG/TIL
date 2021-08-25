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