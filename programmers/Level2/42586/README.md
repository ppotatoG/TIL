# 기능개발

[programmers](https://programmers.co.kr/learn/courses/30/lessons/42586)

### 제출한 정답
```js
```

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

7 / 11
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

정답
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
        if(time[i] !== 0 && (time[i] < time[i + 1] || i === time.length - 1)) {
            answer.push(1);
        }
        else {
            if(time[i] !== 0 && time[i] >= time[i + 1]) {
                let k = i + 1;
                answer.push(1);
                while(time[i] >= time[k]) {
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