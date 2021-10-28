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

중복문에서 `i--`를 까먹었다 5, 12는 통과인데 이번엔 7이 실패다ㅡㅡ

```js
function solution(n, lost, reserve) {
    let has = n - lost.length;
    let arr = [];
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    console.log(lost, reserve);

    for(let i = 0; i < lost.length; i++){
        for(let k = 0; k < reserve.length; k++){
            if(lost[i] === reserve[k]) {
                reserve.splice(k, 1);
                lost.splice(i, 1);
                has ++;
                i--;
                k--;
                break;
            }
        }
    }

    console.log(lost, reserve);

    for(let i = 0; i < lost.length; i++){
        arr.push(lost[i] - 1);
        arr.push(lost[i] + 1);
    }

    if(lost.length > 0) {
        for(let i = 0; i < reserve.length; i++){
            for(let k = 0; k < arr.length; k++){
                if(reserve[i] === arr[k]) {
                    has++;
                    break;
                }
            }
        }
    }

    return has;
}
```

답을 0부터 ++하는게 아닌, 빈 배열을 만들어 0, 1로 구분지어 반환하는 방법.. 으로 다시 해보자

해보긴 개뿔 머리 1도 안돌아감