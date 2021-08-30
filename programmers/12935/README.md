# 제일 작은 수 제거하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12935)

### 제출한 정답
```js
```

원래는 num.sort()[0] min값을 찾아 splice로 제거하려했다

근데 if문 내에서 `num[i] == num.sort()[0]` 해주면 원본배열이 정렬되벌임ㅠㅠ

let arr = num 해놓고 arr.sort()를 해줘도... 그렇게 된다....

`let min = [...num].sort()[0];` 이렇게 하니까 돼따..!!

<br>

이렇게 하니 테스트 2, 5, 6 에서 에러ㅜㅜ
```js
function solution(num) {
    let min = [...num].sort()[0];

    for(let i = 0; i < num.length; i++){
        if(num[i] == min) num.splice(i, 1)
    }

    if(num.length == 0) num = [-1];

    return num;
}
```

뭘 더 해야할지 잘 몰겟다..

일단은 작은값을 배열복사 후 정렬 말고 Math.max()로 해보자

어.. 이게되네ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ

```js
function solution(num) {
    let min = Math.min(...num);

    if(num[0] == num[1]) num = [-1];

    for(let i = 0; i < num.length; i++){
        if(num[i] == min) num.splice(i, 1)
    }

    if(num.length == 0) num.push(-1);
    return num;
}
```

그럼 아래인건데 뭐가 다른걸까

```js
Math.min(...num) !== [...num].sort()[0]
```