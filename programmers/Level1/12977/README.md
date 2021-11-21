# 소수 만들기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12977)

### 제출한 정답
```js
function solution(num) {
    let arr = [];

    for(let i = 0; i < num.length; i++){
        for(let k = i + 1; k < num.length; k++){
            for(let j = k + 1; j < num.length; j++){
                arr.push(num[i] + num[k] + num[j])
            }
        }
    }

    let answer = new Array(arr.length).fill(0);

    for(let i = 0; i < answer.length; i++){
        for(let k = 1; k <= arr[i]; k++){
            if(arr[i] % k === 0) answer[i] ++; 
        }
    }

    return answer.filter((val) => val === 2).length;
}
```