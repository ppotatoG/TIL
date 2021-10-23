# 코딩테스트 연습 가운데 글자 가져오기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript)

### 제출한 정답
```js
function solution(arr) {
    arr.map((val) => val.sort((a, b) => a - b));
    return Math.max.apply(Math, arr.map((val) => val[0])) * Math.max.apply(Math, arr.map((val) => val[1]));
}
```

요새 너무 멍해서 문제 이해를 제대로 못한 상태에서 풀기 시작

풀다보니 뭘 하라는지 좀 알겠다

첨엔 그냥 단순히 arr로 들어온 값 중 가장 큰 값의 배열을 곱하는건줄 알았는데 그건 또 아닌갑다

가로값과 세로값에 가장 큰 값으로.. 하면 되는거...... 아닌...가?
```js
function solution(arr) {
    let tmp = []

    for(let i = 0; i < arr.length; i++){
        tmp.push(Math.max.apply(null, arr[i]));
    }

    const idx = tmp.indexOf(Math.max.apply(null, tmp));

    return arr[idx].reduce((a, b) => a * b)
}
```

문장이 좀 길어서 쫌 많이 긴장했는데.. 다행이다 헤ㅔ헷
```js
function solution(arr) {
    arr.map((val) => val.sort((a, b) => a - b));

    let val1 = 0;
    let val2 = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] > val1) val1 = arr[i][0];
        if(arr[i][1] > val2) val2 = arr[i][1];
    }
    
    return val1 * val2;
}
```

이런 [filter](https://7942yongdae.tistory.com/49)로 뭔가 할 수 있을 거 같은데 아쉽다

filter도 필요 없었네 `Math`는 만능인건가;

```js
function solution(arr) {
    arr.map((val) => val.sort((a, b) => a - b));
    return Math.max.apply(Math, arr.map((val) => val[0])) * Math.max.apply(Math, arr.map((val) => val[1]));
}
```