# 콜라츠 추측

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12943)

### 제출한 정답
```js
function solution(num) {
    let count = 0;

    for(let i = 0; i < 500; i++){
        if(num === 1) break;
        num % 2 == 0 ? num = num / 2 : num = num * 3 + 1;
        count ++;
    }

    return count === 500 ? -1 : count;
}
```

중복문을 while 로 변경할 수 있다...

생각은 했지만...... 까먹음'ㅁ';
```js
function solution(num) {
    let count = 0;

    while(num !== 1 && count < 500) {
        num % 2 == 0 ? num = num / 2 : num = num * 3 + 1;
        count ++;
    }

    return num === 1 ? count : -1;
}
```