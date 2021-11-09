# 키패드 누르기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/67256)

### 제출한 정답
```js
```

이만큼 하고 어질어질 하다
```js
function solution(num, hand) {
    let now = [0, 0]

    for(let i = 0; i < num.length; i++) {
        let line = num[i] % 3;

        if(line == 1) {
            now[0] = num[i];
            num[i] = 'L'
        }
        else if(line == 0) {
            now[1] = num[i];
            num[i] = 'R'
        }
        else {
            console.log(Math.abs(num[i] - now[0]), Math.abs(num[i] - now[1]));
            console.log(num[i], now);

            if(Math.abs(now[0] - num[i]) < Math.abs(now[1] - num[i])) {
                now[0] = num[i];
                num[i] = 'L'
            }
            else if(Math.abs(now[0] - num[i]) > Math.abs(now[1] - num[i])) {
                now[1] = num[i];
                num[i] = 'R'
            }
            else {
                if(hand.slice(0, 1).toUpperCase() === 'L') {
                    now[0] = num[i];
                } else {
                    now[1] = num[i];
                }
                num[i] = hand.slice(0, 1).toUpperCase();
            }
        }
    }
    return num.join('');
}
```