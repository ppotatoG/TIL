# 수박수박수박수박수박수?

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12922)

### 제출한 정답

```js
function solution(num) {
    let subak = '수박';

    for(let i = 1; i < (num / 2) ; i++){
        subak += '수박';
    }

    return num % 2 == 0 ? subak : subak.split(0, -1) ;
}
```

리팩토링을 한다면 이렇게 되겠다
1. '수박'을 `repeat`으로 반복
2. `slice` 로 0부터 까지 자르기
```js
function solution(n) {
    return "수박".repeat(n).slice(0,n);
}
```