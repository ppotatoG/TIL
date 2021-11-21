# 문자열 내 마음대로 정렬하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12903?language=12915)

### 제출한 정답
```js
function solution(arr, num) {
    return arr.sort((a, b) => {
        return a[num] == b[num] ? (a > b) - (a < b) : (a[num] > b[num]) - (a[num] < b[num]);
    });
}
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

[검색해서 찾은 답](https://kimyang-sun.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%82%B4-%EB%A7%88%EC%9D%8C%EB%8C%80%EB%A1%9C-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0-kimyang-sun)

반나절정도 이 문제 풀면서 많이 생각해봤는데.. 모르면 외워야징ㅎ


이거는 그냥 이런게 있다 라는것만 알고 넘어가자
```js
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
```
