# 코딩테스트 연습 모의고사

[programmers](https://programmers.co.kr/learn/courses/30/lessons/42840)

### 제출한 정답
```js
```

오랜만에 알고리즘 해서 그런지 그새 머리가 굳었다

`for of`, `for in`같은건 아예 못쓰겠고 응애 나 애기가 되버렸어

그래도 제출했을 때 3분에 1이나 통과한게 어디야
```js
function solution(arr) {
    const obj = {
        std1 : [1, 2, 3, 4, 5],
        std2 : [2, 1, 2, 3, 2, 4, 2, 5],
        std3 : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    }

    const values = Object.values(obj);

    for(let i = 0; i < values.length; i++){
        const num1 = Math.ceil((arr.length - values[i].length) / values[i].length);

        if(values[i].length < arr.length) {
            for(let j = 0; j < num1; j++){
                values[i].push(Object.values(obj)[i]);;
            }
        }
    }

    for(let i = 0; i < values.length; i++){
        values[i] = values[i].flat();
        for(let k = 0; k < values[i].length; k++){
            if(typeof(values[i][k]) === 'object'){
                values[i].splice(k, 1);
                k--;     
            }
        }
    }

    let count = [0, 0, 0];

    for(let i = 0; i < values.length; i++){
        for(let k = 0; k < arr.length; k++){
            if(values[i][k] === arr[k]){
                count[i] ++;
            }
        }
    }

    count = count.map((el, idx) => el = [idx + 1, el]).sort((a, b) => {
        if (a[1] > b[1]) return 1;
        else if (a[1] < b[1]) return 0;
    });

    if(count[0][1] === count[1][1]){
        if(count[1][1] === count[2][1]) {
            return [count[0][0], count[1][0], count[2][0]];
        }

        else {
            return [count[0], count[1]];
        }
    }else return [count[0][0]];

}
```