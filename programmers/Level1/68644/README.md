# 코딩테스트 연습 두 개 뽑아서 더하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/68644)

## 재한사항
- numbers의 길이는 2 이상 100 이하입니다.
- numbers의 모든 수는 0 이상 100 이하입니다.


### 제출한 정답
```js
function solution(arr) {
    const answer = [] ;

    for (let i = 0; i < arr.length -1 ; i++) {
        for(let j = i + 1; j < arr.length ; j++){
            if(arr.indexOf(arr[i]) == i) answer.push(arr[i] + arr[j])
        }
    }

    answer.sort((a, b) => a - b)
    
    return answer;
}
```

1. 배열의 모든 값을 서로 더하기
```js
answer.push(
    arr[4] + arr[3],
    arr[4] + arr[2],
    arr[4] + arr[1],
    arr[4] + arr[0]
)
answer.push(
    arr[3] + arr[2],
    arr[3] + arr[1],
    arr[3] + arr[0]
)
answer.push(
    arr[2] + arr[1],
    arr[2] + arr[0]
)
answer.push(
    arr[1] + arr[0]
)
```
2. answer 오름차순 정렬
```js
answer.sort((a, b) => a == b ? 0 : a > b ? 1: -1 );
```
3. answer 중복제거
```js
const test = answer.filter((a, b) => {
    return answer.indexOf(a) === b;
});
```

- for문 내에서 answer.push()
- sort는 더 짧게
```js
function solution(arr) {
    const newArr = [];
    
    for (let i = 0; i < arr.length -1 ; i++) {
        for(let j = i + 1; j < arr.length ; j++){
            newArr.push(
                arr[i] + arr[j]
            )
        }
    }

    newArr.sort((a, b) => a == b ? 0 : a > b ? 1: -1 );

    const answer = newArr.filter((a, b) => newArr.indexOf(a) === b);
    
    return answer;
}
```