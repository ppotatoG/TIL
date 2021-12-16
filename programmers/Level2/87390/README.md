# n^2 배열 자르기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/87390)

### 제출한 정답
```js
```

나름 패턴 찾아서 잘했다 하고 뿌듯했는데,

주어진 `left`, `right`에 값만 가져오게끔 해야 런타임이 안난다고 한다

아래 코드대로 돌리면 `실패 (signal: aborted (core dumped))` 뜬다 휴;
```js
function solution(n, left, right) {
    let arr = new Array(n).
    fill(
        new Array(n)
        .fill(0)
        .map((val, idx) => idx + 1)
    );
    
    return arr.map((val, idx) => {
        return val.map((val2, idx2, array) => {
            return val2 <= idx + 1 ? idx + 1 : idx2 + 1;
        })
    })
    .flat(Infinity)
    .slice(left, right + 1);
}
```