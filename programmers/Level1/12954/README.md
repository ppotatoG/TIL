# 코딩테스트 연습 x만큼 간격이 있는 n개의 숫자

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12954)

## 제한사항
- x는 -10000000 이상, 10000000 이하인 정수입니다.
- n은 1000 이하인 자연수입니다.

```js
function solution(x, n){
    const answer = [];

    for(let i = 1; i <= n; i++){
        answer.push(x * i);
    }

    console.log(answer)
}
solution(2, 5) // [2, 4, 6, 8, 10]
solution(4, 3) // [4, 8, 12]
solution(-4, 2) // [-4, -8]
```