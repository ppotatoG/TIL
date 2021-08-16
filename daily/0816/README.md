# reduce 없이 모든 배열의 합 구하기

[프로그래머스 푸는 중](https://github.com/ppotatoG/TIL/tree/master/programmers/82612)

```js
function solution(arr){
    // return arr.reduce((a, b) => a + b);

    let answer = 0;

    for(let i = 0; i < arr.length; i++){
        answer = answer + arr[i];
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
```
