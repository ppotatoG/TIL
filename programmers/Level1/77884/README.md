# 약수의 개수와 덧셈

[programmers](https://programmers.co.kr/learn/courses/30/lessons/77884)

### 제출한 정답
```js
function solution(min, max) {
    let arr = [];
    let answer = 0;

    for(let i = min; i < max + 1; i++ ){
        arr.push(i);
    }

    for(let i = 0; i < arr.length; i++){
        Number.isInteger(Math.sqrt(arr[i])) ? answer = answer - arr[i] : answer = answer + arr[i]
    }

    return answer;
}
```

min, max를 배열로 만들지 않아도 i로 받아와서 answer에 더하면 된다!
```js
function solution(min, max) {
    let answer = 0;
    
    for(let i = min ; i < max + 1; i++){
        Number.isInteger(Math.sqrt(i)) ? answer = answer - i : answer = answer + i;
    }

    return answer;
}
```