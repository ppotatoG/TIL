# 알고리즘 복습

[42862](https://programmers.co.kr/learn/courses/30/lessons/42862)

```js
function solution(n, lost, reserve) {      
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r-a) <= 1) 
        // reserve 값 중 `Math.abs(r-a) <= 1`인 값을 변수에 저장
        
        if(!b) return true
        // `b`가 없으면 true반환.. a반환? 
        
        reserve = reserve.filter(r => r !== b)
        // reserve 값이 b면 reserve 값에서 삭제
    }).length
}
```