# 알고리즘 복습

[12928](https://programmers.co.kr/learn/courses/30/lessons/12928)
```js
function solution12928(n) {
    let answer = 0;

    for(let i = 0; i <= n; i++){
        n % i === 0 ? answer += i : 0;
    } 

    return answer;
}

console.log(solution12928(12)) // 28
console.log(solution12928(5)) // 6
```