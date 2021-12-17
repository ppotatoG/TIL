# n^2 배열 자르기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/87390)

### 제출한 정답
```js
function solution(n, left, right) {
    return Array.from(
    {
        length : right - left + 1
    }
    , (val, idx) => {
        val = left + idx + 1;

        let col = Math.ceil(val / n);
        let row = val % n === 0 ? n : val % n;
        
        val = val % n === 0 ? n : val % n;

        return val <= col ? col : row;
    });
}
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

무려 14점따리를 풀었다ㅠ

[키패드 누르기](https://programmers.co.kr/learn/courses/30/lessons/67256)랑 비슷하게 풀었다

2차원 배열은 너무 어려워서... 나한테는 이게 훨씬 쉽다
```js
function solution(n, left, right) {
    return Array.from(
    {
        length : right - left + 1
    }
    , (val, idx) => {
        val = left + idx + 1;

        let col = Math.ceil(val / n);
        let row = val % n === 0 ? n : val % n;
        
        val = val % n === 0 ? n : val % n;

        return val <= col ? col : row;
    });
}
```

다른사람 풀이에서 숏코딩된걸 푼건데

[parseInt](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt)가 포인트인 것 같다

해석은 못하겠어ㅎㅎ;
```js
const solution = (n, left, right) => {
    return Array.from(
    {
        length : right - left + 1
    },
    (_,index) => {
        return (index + left) % n < parseInt((index + left) / n) + 1  
        ? parseInt((index + left) / n) + 1
        : (index + left) % n + 1
    })
}
```