# 위클리 챌린지 > 6주차 (복서 정렬하기)

[programmers](https://programmers.co.kr/learn/courses/30/lessons/85002?language=javascript)


제출한 정답
```js
function solution(weights, h2h){
    const arr = weights.map((cur, idx) => {
        return [0, 0, cur, idx + 1];
    })

    for(let i = 0; i < weights.length; i++){
        for(let j = 0; j < weights.length; j++){
            if(h2h[i][j] === 'W'){
                arr[i][0]++; 
                if(weights[i] < weights[j]) {
                    arr[i][1]++; 
                }
            }
        }
    }

    arr.map((cur, idx) => cur[0] = h2h[idx].split('').filter((a) => a !== 'N').length ? cur[0] / h2h[idx].split('').filter((a) => a !== 'N').length : 0); 

    return arr.sort((a, b) => {
        if(a[0] !== b[0]) return b[0] - a[0];
        if(a[1] !== b[1]) return b[1] - a[1];
        if(a[2] !== b[2]) return b[2] - a[2];
        else return a[3] - b[3];
    }).map((cur) => cur[3]);
}
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

이건 갖고있어봤자 스트레스만 받을것 같다..!

배열 또는 객체를 만든 후 기준에 따라 `sort()`를 사용하면 될 것 같다고 생각을 하기는 했었다.. 생각 '만'..

[내가 생각한것과 가장 비슷한 풀이](https://velog.io/@gwanuuoo/Algorithm-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B3%B5%EC%84%9C-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0-JS)

---

테스트는 맞는데 제출하면 실패가 더 많다'ㅅ'
```js
function solution(weights, h2h){
    // [이긴 횟수, 나보다 무거운 사람을 이긴 횟수, 몸무게, 선수 번호]
    const arr = weights.map((cur, idx) => {
        return [0, 0, cur, idx + 1];
    })

    for(let i = 0; i < weights.length; i++){
        for(let j = 0; j < weights.length; j++){
            if(h2h[i][j] === 'W'){
                arr[i][0]++; 
                if(weights[i] < weights[j]) {
                    arr[i][1]++; 
                }
            }
        }
    }

    return arr.sort((a, b) => {
        // 승률
        if(a[0] > b[0]) return -1;
        if(a[0] < b[0]) return 1;

        // 자신보다 몸무게가 무거운
        if(a[1] > b[1]) return -1;
        if(a[1] < b[1]) return 1;

        // 자기 몸무게가 더 무거운
        if(a[2] > b[2]) return -1;
        if(a[2] < b[2]) return 1;
        
        // 복서 번호가 작은
        if(a[3] < b[3]) return -1;
        if(a[3] > b[3]) return 1;

        return 0;
    }).map((cur) => cur[3]);
}
```

그래 그... 질문하기 들어가면 승률에 대한 내용이 나온다

'w'.length로 비교하면 되는거 아닌가 굳이 승리/횟수 를 할 필요가 있는건가..

근데 승률얘기가 계속 나오니 나도 써야지ㅠ

`arr.map((cur) => cur[0] = cur[0] / h2h.filter((a) => a !== 'L').length * 10000000);` 이거 추가해도 똑같은거 같은뎁...

`처음에 (a.rate > b.rate) return -1 과 같은 방식으로 했다가 오답판정을 받았다. 이렇게 설정할 경우 승률이 낮으면 아래 조건을 확인하게 되버린다. 즉 승률이 같지만 않으면 해당 조건에서 끝나야한다.`

[참고 포스팅](https://haesoo9410.tistory.com/317?category=934224)

아무리 찾아봐도 승률로 변환하는 곳 말고는 잘못된게 없는 것 같다... 근데 왜 않돼지.... 돼지야....

---

헤헷 찾아버렸지 뭐야 
```js
arr.map((cur, idx) => cur[0] = h2h[idx].split('').filter((a) => a !== 'N').length ? cur[0] / h2h[idx].split('').filter((a) => a !== 'N').length : 0); 
```

---
1이 더 빠르다
```js
// 1
for(let i = 0; i < weights.length; i++){
    for(let j = 0; j < weights.length; j++){
        if(h2h[i][j] === 'W'){
            arr[i][0]++; 
            if(weights[i] < weights[j]) {
                arr[i][1]++; 
            }
        }
    }
}

// 2
weights.map((cur, idx) => h2h.map((cur2, idx2) =>{
    if(h2h[idx][idx2] === 'W') {
        arr[idx][0] ++;
        if(weights[idx] < weights[idx2]) arr[idx][1] ++; 
    }
}))
```