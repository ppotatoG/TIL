# 없는 숫자 더하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/86051)

### 제출한 정답
```js
function solution(num) {
    let newArr = [];
    for(let i = 0; i < 10; i++){
        if(i !== num.sort()[i]){
            num.push(i)
            newArr.push(i);
        }
    }
    return newArr.reduce((a, b) => a + b);
}
```

개쩌는 답
```js
function solution(num) {
    return 45 - num.reduce((a, b) => a + b);
}
```