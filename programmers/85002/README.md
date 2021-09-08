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

뭐.. 어떻게 실행은 맞았는데 채점은 두개밖에 못맞았다'ㅁ';

그래도.. 푼게 어디냐..!

혹시 몰라서 질문 들어가서 보는데 내 코드만 유독 길당 첨부터 다시 해바야지 ㅎㅋ
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
    const obj = Object.assign({}, [...count]);

    const arrObj = Object.entries(obj).sort((a, b) => {
        if(a[a.length - 1] > b[b.length - 1]) return -1
        if(a[a.length - 1] < b[b.length - 1]) return 1
        if(a[a.length - 1] == b[b.length - 1]) return 0
    });

    for(let i = 0; i < weights.length; i++){
        for(let j = 0; j < weights.length; j++){
            if(
                (arrObj[i][1] === arrObj[j][1]) 
                && (i !== j) 
                && (weights[arrObj[i][0]] > weights[arrObj[j][0]])
            ){
                const tmp = arrObj[i];
                arrObj[i] = arrObj[j];
                arrObj[j] = tmp
            }
        }
    }

    return arrObj.map((cur, idx) => cur = Number(arrObj[idx][0]) + 1);
}
```

current값은 헷갈려서 도저히 못쓰겠다

하는 내내 무슨 의미가 있나 싶었지만 혹시 몰라 해봤는데 역시나 실패

어제랑 같은 곳에서 틀렸으니 순서... 방법... 이 틀린거겠지

이정도면 다 틀린게 아닌가... ಡ︷ಡ)
```js
function solution(weights, h2h){
    const arr = [...weights].map((cur, idx) => cur = [idx + 1, cur]);

    arr.map((cur, idx) => {
        cur[2] = 0;
        h2h.map((cur2, idx2) =>{
            if(h2h[idx].slice(idx2, idx2 + 1) === 'W') {
                cur[2] = cur[2] + 1;
                weights[idx] < weights[idx2] ? cur[2] = cur[2] + 1 : 0;
            }
        })
    })

    arr.sort((a, b) => {
        return a[a.length - 1] > b[b.length - 1] ? -1 : 1;
    });

    // arr[0] 0:선수 번호 1:몸무게 2:승률

    arr.map((cur, idx) => {
        return weights.map((cur2, idx2) =>{
            if(
                (arr[idx][1] > arr[idx2][1]) // 몸무게
                && (idx !== idx2) // 본인 제외
                && (arr[idx][2] === arr[idx2][2])
            ){
                const tmp = arr[idx];
                arr[idx] = arr[idx2];
                arr[idx2] = tmp
            }
        })
    })

    return arr.map((cur, idx) => cur[0]);
}
```