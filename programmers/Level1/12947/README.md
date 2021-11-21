# 하샤드 수

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12947)

### 제출한 정답
```js
function solution(num){
    let arr = [];    
    arr = num.toString().split("");

    return num % arr.reduce((a, b) => Number(a) + Number(b)) == 0;
}
```

`num`부분을 뭔가.. 다른 방법으로 가능할 것 같은데....