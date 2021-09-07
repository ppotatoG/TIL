# 위클리 챌린지 > 6주차 (복서 정렬하기)

[programmers](https://programmers.co.kr/learn/courses/30/lessons/85002?language=javascript)


제출한 정답
```js
```

이런식으로 count에 따른 값으로 answer 을 만들어 주면 될 것 같은데 막혔다

오브젝트로 할걸 그랬나.. 그럼 마지막에 answer값 뽑아오기 좋았을것 같은데?
```js
function solution(weights, h2h){
    const count = [...weights].map((i) => i = 0);

    for(let i = 0; i < weights.length; i++){
        for(let j = 0; j < weights.length; j++){
            // console.log(weights[i] + ' vs ' + weights[j] + ' => ' + h2h[i].slice(j, j + 1))
            if(h2h[i].slice(j, j + 1) === 'W'){
                // win
                count[i]++;
                if(weights[i] < weights[j]){
                // 몸무게가 큰 이긴 횟수
                    count[i]++;
                    if(count[i] === count[j]) {
                        console.log(count[i] + ' + ' + count[j]);
                    }
                }
            }
        }
    }

    console.log([...count].sort().reverse());
    console.log(count.map((cur, idx) => cur + ' + ' + idx));

    return count;
}
```