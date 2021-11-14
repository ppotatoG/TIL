# 키패드 누르기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/67256)

### 제출한 정답
```js
function solution(num, hand) {
    let finger = [10, 12]
    let answer = [...num]
    
    
    for(let i = 0; i < num.length; i++) { 
        let row = num[i] === 0 ? 2 : num[i] % 3;
        
        if(row == 1) {
            finger[0] = num[i];
            answer[i] = 'L'
        }
        else if(row == 0) {
            finger[1] = num[i];
            answer[i] = 'R'
        }
        
        else {
            const idx = (num) => num === 0 ? [4, 2] : [Math.ceil(num / 3), num % 3 === 0 ? 3 : num % 3];

            const left = Math.abs(idx(finger[0])[0] - idx(num[i])[0]) + Math.abs(idx(finger[0])[1] - idx(num[i])[1]);
            const right = Math.abs(idx(finger[1])[0] - idx(num[i])[0]) + Math.abs(idx(finger[1])[1] - idx(num[i])[1]);
            
            if(left < right) {
                finger[0] = num[i];
                answer[i] = 'L'
            }
            else if(left > right) {
                finger[1] = num[i];
                answer[i] = 'R'
            }
            else {
                if(hand.slice(0, 1).toUpperCase() === 'L') {
                    finger[0] = num[i];
                } else {
                    finger[1] = num[i];
                }
                answer[i] = hand.slice(0, 1).toUpperCase();
            }
        }
    }
    
    return answer.join('');
}
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

`4	2	5	R	왼손 거리와 오른손 거리가 1로 같으므로, 오른손으로 5를 누릅니다.`

이 부분이 문제다........

2차원 배열을 선언해서 거리를 구해야 한다고 했다.. 음..?

[나랑 같은 방법](https://shrimp-burger.tistory.com/185)

위 포스팅에 나온 공식을 잘 이해하지 못해서... 결국 내 방식대로 풀었다