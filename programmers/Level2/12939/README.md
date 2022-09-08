# 최댓값과 최솟값

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12939)

### 제출한 정답
```js
const solution = str => {
    const min = Math.min.apply(null, str.split(' ').map(Number));
    const max = Math.max.apply(null, str.split(' ').map(Number));
    return `${min} ${max}`;
}
```