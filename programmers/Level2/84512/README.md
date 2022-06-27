# 모음사전

[programmers](https://programmers.co.kr/learn/courses/30/lessons/84512?language=javascript)

### 제출한 정답
```js
const solution = (s) => {
    const collection = ['A', 'E', 'I', 'O', 'U'];
    const multiple = [781, 156, 31, 6, 1];

    return s.split('').reduce((acc, cur, idx) => {
        if(cur !== 'A') {
            const findIdx = collection.findIndex(val => val === cur);
            return acc + 1 + (multiple[idx] * findIdx);
        }
        else {
            return acc + 1;
        }
    }, 0);
}
```
