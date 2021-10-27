# 체육복

[programmers](https://programmers.co.kr/learn/courses/30/lessons/42862)

### 제출한 정답
```js
```

테케통과, 정확도 30%.. 3분에 1이나 통과햇다 대박
```js
function solution(n, lost, reserve) {
    let has = n - lost.length;
    let arr = [];

    for(let i = 0; i < lost.length; i++){
        arr.push(lost[i] - 1);
        arr.push(lost[i]);
        arr.push(lost[i] + 1);
    }

    console.log(arr)

    for(let i = 0; i < reserve.length; i++){
        for(let k = 0; k < 3; k++){
            if(reserve[i] === arr[ k + i *3]) {
                has++;
                break;
            }
        }
    }
    return has;
}
```

배열 오름차순도 했고,,..,.. `lost`, `reserve` 중복도 제외하고 ++도 했다

근데 5, 12만 안돼
```js
function solution(n, lost, reserve) {
    let has = n - lost.length;
    let arr = [];

    lost.sort((a, b) => a + b);
    reserve.sort((a, b) => a + b);

    for(let i = 0; i < lost.length; i++){
        for(let k = 0; k < reserve.length; k++){
            if(lost[i] === reserve[k]) {
                reserve.splice(k, 1);
                has ++;
            }
        }
    }

    for(let i = 0; i < lost.length; i++){
        arr.push(lost[i] - 1);
        arr.push(lost[i]);
        arr.push(lost[i] + 1);
    }

    for(let i = 0; i < reserve.length; i++){
        for(let k = 0; k < arr.length; k++){
            if(reserve[i] === arr[k]) {
                has++;
                break;
            }
            if(has >= n) break;
        }
    }
    return has;
}
```
[5, 12번 테스트 케이스 문제 발생 시](https://programmers.co.kr/questions/21442)

이거 했잖아.. 내가 한거 아냐..?