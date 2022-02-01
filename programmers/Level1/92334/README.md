# 신고 결과 받기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/92334)

### 제출한 정답
```js
```


### 24개중 7개 런타임
```js
const solution = (id_list, report, k) => {
    report = report
    .filter((a, b) => report.indexOf(a) === b)
    .map(val => val.split(' '));

    let answer = id_list.map(val => [val, 0, 0]);

    for(let i = 0; i < report.length; i++) {
        let findIdx = id_list.findIndex(val => val === report[i][1]);
        answer[findIdx][1] ++;
    }

    let tmp = answer.filter(val => val[1] >= k).map(val => val[0]);
    
    for(let i = 0; i < report.length; i++) {
        for(let k = 0; k < tmp.length; k++) {
            if(report[i][1] === tmp[k]) {
                let findIdx = id_list.findIndex(val => val === report[i][0]);
                answer[findIdx][2] ++;
            }
        }
    }   

    return answer.map(val => val[2]);
}
```

[[프로그래머스] 신고 결과 받기](https://velog.io/@intersoom/programmers-%EC%8B%A0%EA%B3%A0-%EA%B2%B0%EA%B3%BC-%EB%B0%9B%EA%B8%B0)

[코딩테스트 - 신고 결과 받기 JavaScript](https://velog.io/@dnjsdud2257/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%8B%A0%EA%B3%A0-%EA%B2%B0%EA%B3%BC-%EB%B0%9B%EA%B8%B0-JavaScript)

1. `유저  Id`, `내가 신고당한 횟수`가 있는 배열 또는 객체 
2. `내가 신고당한 횟수가 K보다 큰`값만 있는 배열 또는 객체에 `나를 신고한 유저 Id` 추출(?)

일단 나는 런타임으로 에러라... 다른 효율적인것 같은? 방법으로 다시 풀어봤는데

이게 처음거보다 시간이 더 오래걸린다!; 어쩌란거지ㅠㅠ;

```js
const solution = (id_list, report, k) => {
    const obj = {};
    
    id_list.map(val => obj[val] = []);
    
    report = report
    .filter((a, b) => report.indexOf(a) === b)
    .map(val => {
        val = val.split(' ');
        obj[[val[1]]].push(val[0]);
    })

    const arr = [...id_list].map(val => [val, 0])

    Object.values(obj).map(val => {
        if(val.length >= k) {
            val.map(val2 => {
                const idx = id_list.findIndex(userId => userId === val2)
                arr[idx][1] += 1;
            })
        }
    });

    return arr.map(val => val[1]);
}
```