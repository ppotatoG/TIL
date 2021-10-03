# 코딩테스트 연습 폰켓몬

[programmers](https://programmers.co.kr/learn/courses/30/lessons/1845?language=javascript)

### 제출한 정답
```js
function solution(num) {
    const arr = num.filter((a, b) => num.indexOf(a) === b);
    return arr.length > num.length / 2 ? num.length / 2 : arr.length;
}
```

```js
function solution(num) {
    let arr = num.filter((a, b) => num.indexOf(a) === b);
    while(arr.length > num.length/2) arr.pop();

    return arr.length;
}
```

굳이 중복을 돌면서 배열값을 삭제하지 않아도 되...잖아?
```js
function solution(num) {
    const arr = num.filter((a, b) => num.indexOf(a) === b);
    return arr.length > num.length / 2 ? num.length / 2 : arr.length;
}
```