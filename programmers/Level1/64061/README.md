# 크레인 인형뽑기 게임

[programmers](https://programmers.co.kr/learn/courses/30/lessons/64601)

### 제출한 정답
```js
function solution(board, move) {
    let answer = 0;
    let basket = [];

    for(let i = 0; i < move.length; i++){
        let line = move[i] - 1;
        for(let k = 0; k < board.length; k++){
            if(board[k][move[i] - 1] !== 0){
                if(basket[basket.length - 1] === board[k][line]){
                    answer += 2;
                    basket.pop();
                }
                else basket.push(board[k][line]);
                
                board[k][line] = 0;

                break;
            }
        }
    }
    
    return answer;
}
```


[예제 답이 왜 4인지..](https://velog.io/@ajufresh/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%81%AC%EB%A0%88%EC%9D%B8-%EC%9D%B8%ED%98%95%EB%BD%91%EA%B8%B0-%EA%B2%8C%EC%9E%84-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-Java)


`answer += 2`는 해주는 중복문을... 두번 쓰는게 아니라 중복으로 돌아가게 해야 하는데,,, 잘 모르겠다

```js
function solution(board, move) {
    let arr = [];
    let tmp = new Array(move.length).fill(0);
    let answer = 0;

    for(let i = 0; i < board.length; i++){
        arr[i] = board.map((val) => val = val[i]).filter((val) => val !== 0);
    }

    for(let i = 0; i < move.length; i++){
        const line = move[i] - 1;

        tmp[i] = arr[line][0];
        arr[line].splice(0, 1);
    }
    
    tmp = tmp.filter((val) => val !== undefined)
    
    for(let i = 0; i < tmp.length; i++){
        if(tmp[i] === tmp[i + 1]) {
            answer += 2;
            tmp.splice(i, 2);
        }
    }

    for(let i = 0; i < tmp.length; i++){
        if(tmp[i] === tmp[i + 1]) {
            answer += 2;
            tmp.splice(i, 2);
        }
    }

    return answer;
}
```
1. 

5x5배열을 옆으로 뒤집어 0을 다 빼줬다

사실 뒤집을 필요도 없고, 조건으로 0이 아닌 값을 가져오면 되는거라 `불필요한 코드`

`board`
```js
0: (5) [0, 0, 0, 0, 0]
1: (5) [0, 0, 1, 0, 3]
2: (5) [0, 2, 5, 0, 1]
3: (5) [4, 2, 4, 4, 2]
4: (5) [3, 5, 1, 3, 1]
```

`arr`
```js
0: (2) [4, 3]
1: (3) [2, 2, 5]
2: (4) [1, 5, 4, 1]
3: (2) [4, 3]
4: (4) [3, 1, 2, 1]
```

2. 

`move`로 중복을 돌며, 

`tmp`에 인형을 담아주고,

`arr`에서 담은 인형을 빼줌
```js
for(let i = 0; i < move.length; i++){
    const line = move[i] - 1;

    tmp[i] = arr[line][0];
    arr[line].splice(0, 1);
}
```

3. 

`tmp`에 담인 값들을 봐줘야 하는데

중복을 돌아야 하고, 조건이 필요하니 `while`을 사용하려 했지만 못했다

[참고할 블로그](https://ghost4551.tistory.com/58)

---


```js
function solution(board, move) {
    let answer = 0;
    let basket = [];

    for(let i = 0; i < move.length; i++){

        // 확인할 인덱스값
        let line = move[i] - 1;


        for(let k = 0; k < board.length; k++){

            // 인형이 있을 때
            if(board[k][move[i] - 1] !== 0){

                // 바구니의 마지막 값과 추가되려하는 값이 같을 때
                if(basket[basket.length - 1] === board[k][line]){
                    answer += 2;
                    basket.pop();
                    // 추가하지 않고, 마지막값 삭제
                }

                else basket.push(board[k][line]);
                // 바스켓에 인형 추가
                
                board[k][line] = 0;
                // 해당 인형 0으로 만들어 비었음을 나타냄

                break;
                // ?? 
                // 여기까지 왔는데 남아있는 값은 사라지란건가?
            }
        }
    }
    
    return answer;
}
```