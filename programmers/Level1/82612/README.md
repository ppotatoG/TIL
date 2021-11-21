# 부족한 금액 계산하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/82612)

## 제한사항
- 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
- 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
- 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수


### 제출한 정답
```js
function solution(p, m ,c){
    let arr = [];

    for(let i = 1; i < c + 1; i++){
        arr.push(p*i);
    }
    
    return arr.reduce((a, b) => a + b) <= m ? 0 : arr.reduce((a, b) => a + b) - m;
}

console.log(solution(3, 40, 4))
```

테스트 4에서 실패를 했고, 질문하기를 보니 `단, 금액이 부족하지 않으면 0을 return 하세요.` 이라는 말을 봤다
```js
function solution(p, m ,c){
    let arr = [];

    for(let i = 1; i < c + 1; i++){
        arr.push(p*i)
    }

    return (arr.reduce((a, b) => a + b)) - m;
}
```

Math.sign() 쓰면서 열심히 하는데 잘 안되네... 내가 어디까지 맞춰줘야 하는거냐구...

조건식도 넣어놨는데 도대체 뭐가 문제인거지..? 진짜 어렵다 너란코드...

이렇게 하면 테스트 2, 4, 15, 23 에서 실패가 뜬다

```js
function solution(p, m ,c){
    let arr = [];

    for(let i = 1; i < c + 1; i++){
        arr.push(p*i)
    }

    let answer = (arr.reduce((a, b) => a + b)) - m;

    return Math.sign(answer) == -1 || Math.sign(answer) == 0 ? 10 : answer;
}
```

이렇게 하니까 됐다
```js
function solution(p, m ,c){
    let arr = [];

    for(let i = 1; i < c + 1; i++){
        arr.push(p*i);
    }
    
    return arr.reduce((a, b) => a + b) <= m ? 0 : arr.reduce((a, b) => a + b) - m;
}

console.log(solution(3, 40, 4))
```

1. `단, 금액이 부족하지 않으면 0을 return 하세요.` 이 문장을 잘 이해할 수 있도록 글을 더 봐야 하나..?
2. 굳이 배열을 만들어 값을 추가할 필요가 없다
3. tmp = 0 으로 선언하여 중복을 돌며 tmp에 값을 더하기
4. tmp에서 money를 빼는게 아닌, [Math.abs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)로 절대값 반환하기

부족한 점은 이정도가 있는 듯 하다
더 열심히 해야징'ㅅ'

```js
function solution(p, m ,c){
    let tmp = 0;

    for(let i = 1; i < c + 1; i++){
        tmp = tmp + p*i;
    }

    return tmp <= m ? 0 : Math.abs(tmp) - m;
}
```