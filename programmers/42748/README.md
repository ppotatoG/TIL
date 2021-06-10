# 코딩테스트 K번째수

[programmers](https://programmers.co.kr/learn/courses/30/lessons/42748)

## 제한사항
- array의 길이는 1 이상 100 이하입니다.자 중에는 동명이인이 있을 수 있습니다.
- array의 각 원소는 1 이상 100 이하입니다.
- commands의 길이는 1 이상 50 이하입니다.
- commands의 각 원소는 길이가 3입니다.
<br>

### 제출한 정답
```
function solution(a, c) {
    var answer = []

    for( let i = 0 ; i < c.length; i ++){
        answer[i] = a.slice(c[i][0] - 1, c[i][1]).sort()[c[i][2] - 1]
    }
    console.log(answer)
    // return answer
}
let array = [1, 5, 2, 6, 3, 7, 4]
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

solution(array, commands)
```
<br>

README 작성하는거 잊어서 지금현재 코드라도...

```
// console.log(arr.slice( i - 1, j ).sort()[ k - 1 ])
function solution(a, c) {
    var answer = []

    console.log(a.slice(c[2][0] - 1 , c[2][1]).sort()[c[2][2] - 1])
    // return answer

    for( let i = 0 ; i < a.length; i ++){
        var answer = a.slice(c[i][0] - 1, c[i][1].sort(c[i][2] - 1))
    }
}
let array = [1, 5, 2, 6, 3, 7, 4]
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

solution(array, commands)
```

