# 복습

[68644](https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript)


예전에 풀었을 때는 arr[0] + arr[1] ... 적어가면서 반복문 어떻게 써야할지 고민했는데
이번엔 그냥 같은 숫자 반복하고 같은 배열값 더하는건 안되니 조건문을 넣어줬다 `오늘도 성장했다`
```js
function solution(a){
    let arr = [];

    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a.length; j++){
            if(i !== j) arr.push(a[i] + a[j])
        }
    }

    const answer = arr.filter((a, b) => {
        return arr.indexOf(a) === b;
    });

    return answer.sort((a, b) => a - b);
}
```

[예전 풀이](https://github.com/ppotatoG/TIL/tree/master/programmers/68644)

---
[70128](https://programmers.co.kr/learn/courses/30/lessons/70128?language=javascript)

뚝-딱
```js
function solution(a, b){

    let arr = [];

    for (let i = 0; i < a.length; i++) {
        arr.push(a[i] * b[i]);
    }

    return arr.sort((a, b) => a - b).reduce((a, b) => a + b);
}
```

[예전 풀이](https://github.com/ppotatoG/TIL/tree/master/programmers/70128)
