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

각 학생들의 답을 늘린건.. 배열끝에 갔을 때 처음으로 돌아가는 방법을 잘 모르겠어서;

근데 이 방법으로는 안되는건가 싶지만 일단 마저 해보자!

<br>

중간에 `sort`랑.. 값 잘못 리턴시킨거 수정했더니 통과는 되는데 런타임뜬다!

어제의 내가 많이 내가 졸렸나보다ㅎㅅㅎ;;

다행히 다른 문제들처럼 테케에 따라 많이 달라지는건 아닌갑다
```js
    count = count.map((el, idx) => el = [idx + 1, el]).sort((a, b) => {
        if (a[1] < b[1]) return 1;
        else if (a[1] > b[1]) return -1;

        return 0;
    });


    if(count[0][1] === count[1][1]){
        if(count[1][1] === count[2][1]) return [count[0][0], count[1][0], count[2][0]];
        else return [count[0][0], count[1][0]];
    }else return [count[0][0]];
}
```

구글링 첫번째로 뜨는 블로그에서 이걸 가져왔는데 이게 뭔지 잘 모르겠다;;
```js
for(var i=0; i<answers.length; i++){
    if(answers[i] === list[0][i%5])
        point[0]++;
    if(answers[i] === list[1][i%8])
        point[1]++;
    if(answers[i] === list[2][i%10])
        point[2]++;
}
```
`%` 는 몫........ i를 나눠서 몫을 보니까 중복이나 조건 없이 저게 가능하다...! 개쩐다