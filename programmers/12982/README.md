# 코딩테스트 연습 예산

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript)

제출한 정답
```js

```

`break`부분이 이상하다..
```js
function solution(d, budget){
    let sum = 0;
    let count = 0;
    d.sort();
    
    for(let i = 0; i < d.length; i ++){
        if(sum > budget) break;
        sum += d[i];
        count ++;
        console.log(`${i}번째`, sum, sum > budget)
    }

    return `${count}번`;
}
```

나도 `while`잘 쓰고 싶은데 은근히 어렵단말이지;;

이거 하면 잘 되다가 오답 많이 난다

`sort() => sort((a, b) => a - b)` 하면 잘 됨!!

sort는 아무리 써도 어렵다 주입식이 답인듯
```js
function solution(d, budget){
    d.sort();

    let i = 0;
    let sum = 0;

    while(sum < budget) {
        i++;
        sum += d[i];
    }

    return i;
}
```

이 담에는 3, 5번 분제가 실패인데 부서가 하나인 경우도 생각해달란다

바라는거 겁나 많아 휴;

아래처럼 뜨길래 리턴에 값을 넣어줬는데 그래도 5번문제는 실패다
```js
console.log(solution([9], 10)); // 1
console.log(solution([10], 10)); // 1
console.log(solution([11], 10)); // 1
```

`return d.length === 1 && d > budget? 0 : i;`

많이 틀린것도 아니고 23개중에 한개 틀린거면 분명 별거 아닌데 그러는걸거다... 머가 문제일가...