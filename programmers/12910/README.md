# 코딩테스트 연습 나누어 떨어지는 숫자 배열

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12910)

## 재한사항
- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.


### 제출한 정답
```js
function solution(arr, divisor) {
    var answer = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0) {
            answer.push(arr[i])
            answer.sort((a, b) => a - b)
        }
    }

    if(answer.length == 0) answer.push(-1)

    return answer;
}
```


ReferenceError [Error]: item is not defined ??
```js
function solution(arr, divisor) {
    var answer = [];
    for(item of arr){
        if(item % divisor == 0) {
            answer.push(item)
            answer.sort((a, b) => a - b)
        }
    }
    if(answer.length == 0) {
        answer.push(-1)
    }
    // return answer;
    console.log(answer)
}
```

for of가 아닌 for(let i = 0; i < arr.length; i++)로 하면 에러가 안뜬다