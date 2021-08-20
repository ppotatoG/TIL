# 소수 찾기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12921)

### 제출한 정답
```js
```


```js
function solution(num) {
    let answer = 0; // length 계산해서 담아줄 answer 선언

    for(let item = 2; item < num + 1; item ++){ // num에 올 수 있는 모든 순자
        
        let count = 0; // 약수의 갯수를 확인해주기 위한 count

        for(let i = 2; i < item + 1; i ++){  // 배열 순회하며 약수 확인
            if(item % i == 0 ) count ++; // 몫이 0일 때 count ++
        }

        if(count == 1) answer ++; // 소수 == 약수의 갯수가 2개 answer ++
    }

    return answer;
}
console.log(solution(5))
```

풀이보다 최적화를 보는 문제인것 같다

질문하기 들어가보니 
- n의 루트까지만 나눠 떨어지는지 체크 ?
- n보다 작은 소수들로 나누어지지 않으면 소수

라고 했다.. 잘 모르겠지만 최대한 해보자

[소수](https://ko.wikipedia.org/wiki/%EC%86%8C%EC%88%98_(%EC%88%98%EB%A1%A0))