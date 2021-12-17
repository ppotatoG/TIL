# 멀쩡한 사각형

[programmers](https://programmers.co.kr/learn/courses/30/lessons/62048)

### 제출한 정답
```js
```

틀려도 때려 맞추는 재미가 있는 것 같다ㅋㅋ
```js
function solution(w, h) {
    const num = Math.ceil(Math.sqrt((h*h) + (w*w)));
    const sum = w * h
    
    // 정사각형
    if(w === h) {
        return sum - w;
    }
    // 둘 다 홀수
    else if (w % 2 !== 0 && h % 2 !== 0) {
        return sum - num + 1
    }
    // 둘 다 짝수
    else if (w % 2 === 0 && h % 2 === 0) {
        return sum - num - 1;
    }
    else {
        sum - num + 3
    }
}
```

유클리드호제법에 대한 이야기가 나오는데.. 먼가 일케 공식 쓰는건 나와 맞지 않아..

문제가 어려워도 짜증보다 재미있다 천직이 확실해