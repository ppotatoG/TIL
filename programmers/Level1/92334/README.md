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
