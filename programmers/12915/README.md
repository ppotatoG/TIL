# 문자열 내 마음대로 정렬하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12903?language=12915)

### 제출한 정답
```js
```

오또카지 오또카지 삽질 두시간 하고 [이거](https://github.com/ppotatoG/TIL/tree/master/daily/0814)하고 왔다

나는 아무것도 모르겠다
```js
function solution(arr, num) {
    return arr.sort((a, b) => {
        if(a[num] < b[num]) return -1;
        else if(a[num] > b[num]) return 1;
        else if(a[num] == b[num]) {
            a - b;
        }
    });
}
```