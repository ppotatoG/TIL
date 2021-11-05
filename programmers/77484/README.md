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