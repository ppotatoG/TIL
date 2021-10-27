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