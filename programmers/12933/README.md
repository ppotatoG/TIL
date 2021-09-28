# 정수 내림차순으로 배치하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12933)

### 제출한 정답
```js
function solution(num) {
    const arr = String(num).split('');

    arr.sort((a, b) => {
        if(a > b) return -1;
        else if(a < b) return 1;
        else return 0;
    });
    return Number(arr.join(''));
}
```
대충 해석하면 이렇다
```js
function solution(num) {
    const arr = String(num).split(''); // 숫자를 문자열로 변경해 split()

    arr.sort((a, b) => { // sort((a, b) => a + b) 가 안되길래 조건문으로 넣어줌
        if(a > b) return -1;
        else if(a < b) return 1;
        else return 0;
    });
    return Number(arr.join('')); // 정렬한 값 합친 후 숫자로 변경하기
}
```

sort() 부분을 이렇게 바꿀 수 있다
```js
arr.sort((a, b) => a - b).reverse();
```

숫자를 문자로 변경하는 부분을 바꿀 수 있는데... 이거는 리팩토링 말고 추후 공부하도록 하자

---


```js
function solution(num) {
    return Number(String(num).split('').sort((a, b) => a - b).reverse().join(''));
}
```