# 최대공약수와 최소공배수

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12940)

### 제출한 정답
```js
function solution(a, b) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    return [gcd(a, b), a * b / gcd(a, b)];
}
```

[유클리드 호제법](https://myjamong.tistory.com/138)
[참고 포스팅](https://swess.tistory.com/13)

왠만하면 이해하고 풀어보려 했는데 이해보다 암기가 더 빠를 것 같아