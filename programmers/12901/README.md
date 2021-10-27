# 2016년

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12901)

### 제출한 정답
```js
```

런타임에러 떠서 굉장히 당황스러워 하는 중;;
```js
function solution(a, b) {
    const month = [31, 29 ,31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const date = month.slice(0, a - 1).reduce((a, b) => a + b) + b;

    if((date - 4) % 7 === 0) return 'MON';
    if((date - 4) % 7 === 1) return 'TUE';
    if((date - 4) % 7 === 2) return 'WED';
    if((date - 4) % 7 === 3) return 'THU';
    if((date - 4) % 7 === 4) return 'FRI';
    if((date - 4) % 7 === 5) return 'SAT';
    if((date - 4) % 7 === 6) return 'SUN';
}
```

`map`, `for` 전부 안돼.. 외않되.......

[여기는 잘만 된다](https://mylittletechdiary.tistory.com/entry/JavaScript-Lv1-2016%EB%85%84)

매소드를 사용하면 안되는걸라나;?

다 빼도 안된다

```js
function solution(a, b) {
    const month = [31, 29 ,31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const arr = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    let date = 0;

    for(let i = 0; i < a - 1; i++){
        date += month[i];
    }

    return arr[(date + b - 4) % 7];
}
```

아몰랑 더 못해먹겠서;;
```js
function solution(a, b) {
    const month = [31, 29 ,31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const arr = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    const date = month.slice(0, a - 1).reduce((a, b) => a + b);

    return arr[(date + b) % 7];
}
```