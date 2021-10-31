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


---

윤군한테 도움을 요청했는데 `solution(5, [2, 4], [1, 3, 5]`하면 `5`가 아니라 `7`이 나온다더라

저번에... 조건으로 답이 n보다 크면 중복 멈추게 했던게 떠오름!

그거 추가하니까 성공했따ㅠㅠ

```js
function solution(n, lost, reserve) {
    let has = n - lost.length;
    let arr = [];
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

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
                if(has >= n) break;
            }
        }
    }

    return has;
}
```

50번째 문제도 끝... 프로그래머스 레벨1 6개 남기고 다했다 대박스....

[공부해볼 내용](https://velog.io/@leeeunbin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%B2%B4%EC%9C%A1%EB%B3%B5-JavaScript)

