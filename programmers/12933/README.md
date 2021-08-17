# 정수 내림차순으로 배치하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12933)

### 제출한 정답
```js
function solution(num) {
    const arr = String(num).split('');

    arr.sort((a, b) => {
        if(a > b) return -1;
        else if(a < b) return 1;
        else return 0;
    });
    return Number(arr.join(''));
}
```