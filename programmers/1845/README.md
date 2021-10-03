# 코딩테스트 연습 폰켓몬

[programmers](https://programmers.co.kr/learn/courses/30/lessons/1845?language=javascript)

### 제출한 정답
```js
function solution(num) {
    let arr = num.filter((a, b) => num.indexOf(a) === b);
    while(arr.length > num.length/2) arr.pop();

    return arr.length;
}
```
