# 코딩테스트 나머지가 1이 되는 수 찾기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/87389)

### 제출한 정답
```js
function solution(num) {
    for(let i = 2; i < num; i++){
        if(num % i === 1) return i;
    }
}
```
