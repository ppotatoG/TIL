# 기능개발

[programmers](https://programmers.co.kr/learn/courses/30/lessons/42586)

### 제출한 정답
```js
function solution(progresses, speeds) {
    const time = [...progresses].map((val, idx) => Math.ceil((100 - val) / speeds[idx]));
    let answer = [0];
    let maxDay = time[0];

    for(let i = 0; i < time.length; i++){
        if(time[i] <= maxDay) answer[answer.length - 1] ++;
        else {
            maxDay = time[i];
            answer.push(1);
        }
    }
    
    return answer;
}
```

리드미를 안쓰면서 풀었더니 이걸 왜 넣어놨는지 기억이 안난다

```js
function solution(progresses, speeds) {
    let time = [...progresses].map((val, idx) => {
        let num = 0;
        for(let i = val; i < 100; i += speeds[idx]) {
            num++;
        }

        return num;
    });

    console.log(time);

    for(let i = 0; i < time.length; i++){
        if(time[i] !== 0 && time[i] <= time[i + 1]) time[i] = 1;
        else {
            if(time[i] > time[i + 1]) {
                let k = i + 1;
                while(time[i] > time[k]) {
                    if(time[i] < time[k]) break;
                    console.log(time[k])
                    time[k] = 0;
                    k++;
                }
                time[i] = 0;
            }
        }

    }

    return time;
}
```

이 코드로 11개 중 7개 통과
```js
function solution(progresses, speeds) {
    let time = [...progresses].map((val, idx) => {
        let num = 0;
        for(let i = val; i < 100; i += speeds[idx]) {
            num++;
        }

        return num;
    });

    let answer = [];

    for(let i = 0; i < time.length; i++){
        if(time[i] !== 0 && (time[i] <= time[i + 1] || i === time.length - 1)) {
            answer.push(1);
        }
        else {
            if(time[i] > time[i + 1]) {
                let k = i + 1;
                answer.push(1);
                while(time[i] > time[k]) {
                    if(time[i] < time[k]) break;
                    answer[answer.length - 1] ++;
                    time[k] = 0;
                    k++;
                }
                time[i] = 0;
            }
        }

    }
    
    return answer;
}
```

이번 문제 풀면서 가장 중요한 포인트는 이거다

`console.log(solution([5, 5, 5], [21, 25, 20])); // [3]`

소요시간으로 봤을 때 [5, 4, 5]가 되는데, 그럼 정답은 3이 나와야 함!

[참고 블로그](https://lts0606.tistory.com/462)

### 보충

`time`부분을.. 더 쉽게.. 간단하게..!

다른 부분은.. 어떻게 돌아가게 했는데 설명은 못하겠다

미래에 내가 하겠지

```js
function solution(progresses, speeds) {
    const time = [...progresses].map((val, idx) => Math.ceil((100 - val) / speeds[idx]));
    let answer = [0];
    let maxDay = time[0];

    for(let i = 0; i < time.length; i++){
        if(time[i] <= maxDay) answer[answer.length - 1] ++;
        else {
            maxDay = time[i];
            answer.push(1);
        }
    }
    
    return answer;
}
```