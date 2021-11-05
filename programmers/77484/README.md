# 로또의 최고 순위와 최저 순위

[programmers](https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript)

### 제출한 정답
```js
function solution(lottos, win_nums) {
    lottos.sort((a, b) => a - b);
    win_nums.sort((a, b) => a - b);

    const arr = [];

    for(let i = 0; i < lottos.length; i++){
        for(let k = 0; k < lottos.length; k++){
            if(lottos[i] === 0) {
                arr[i] = 0;
            }
            else if(lottos[i] === win_nums[k]) {
                arr[i] = true;
            }
        }
    }
    const result = new Array(6).fill(0).map((val, idx) => val = idx + 1).reverse();

    const same = arr.filter((val) => val === true).length;
    const blank = arr.filter((val) => val === 0).length;

    return [result[same + blank === 0 ? 0 : same + blank - 1], result[same === 0 ? 0 : same - 1]]
}
```

1.

나는 `result`로 써서 -1 때문에 값 내에서 조건문을 줬다

아래 처럼 `rank = [6, 6, 5, 4, 3, 2, 1]`해놓으니 참 깔끔한듯!


2.

[includes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)사용으로 배열끼리 값 비교하기 훨씬 좋다

3.

`lottos.filter(v => !v)`를 하면 값이 `0`인 애들만 빠져나온다...

```js
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}
```