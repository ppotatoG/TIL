# 소수 찾기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12921)

### 제출한 정답
```js
function solution(num){
    const nArr = new Array(num).fill(false)
    nArr[0] = true;
    for(let i = 2; i * i <= num; i++){
        for(let k = i * i; k <= num; k += i){
            nArr[k - 1] = true;
        }
    }
    
    return nArr.filter((cur) => cur === false).length;
}
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
[에라토스테네스의 체](https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4)
[에라토스테네스의 체 TIL](https://github.com/ppotatoG/TIL/tree/master/daily/0822)

[같은 문제 풀이 포스팅](https://velog.io/@ryong9rrr/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Lv1.-%EC%86%8C%EC%88%98-%EC%B0%BE%EA%B8%B0)

이거 풀면서 스트레스 받는건 좋지 못한것 같다


```js
function solution(num){
    const nArr = new Array(num).fill(false) // num만큼 배열 생성, 배열값은 false
    nArr[0] = true; // 1 제외
    for(let i = 2; i * i <= num; i++){ 
    // 1제외, 2부터 시작
    // 제곱근으로 순회
        for(let k = i * i; k <= num; k += i){
        // 제곱근의 배수 
            nArr[k - 1] = true; // 제곱근의 배수에 true
        }
    }
    
    return nArr.filter((cur) => cur === false).length; 
    // 체에서 걸러져 남은 애들만 필터링, 필터링 된 배열의 길이
}
```

[참고 포스팅](https://chaeyoung2.tistory.com/41)