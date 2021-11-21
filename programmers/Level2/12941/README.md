# 최솟값 만들기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12941)

### 제출한 정답
```js
function solution(a, b) {
    a.sort((a, b) => a - b);
    b.sort((a, b) => b - a);
    
    return a.map((val, idx) => val = val * b[idx]).reduce((a, b) => a + b);
}
```

mpa으로 곱한 값을 배열 내 값으로 전달한 후, reduce로 모두 더함


reduce로 내가 두번 걸쳐 진행한 내용을 한번에..!!
```js
function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
}
```

[/ppotatoG/TIL/tree/master/js/Global_Objects/array/reduce](https://github.com/ppotatoG/TIL/tree/master/js/Global_Objects/array/reduce)에 넣으려 했는데 이미 있어서 머쓱;;