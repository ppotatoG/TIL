# 짝지어 제거하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12973)

### 제출한 정답
```js
function solution(s) {
    const arr = s.split('');
    const answer = [];

    for(let i = 0; i < arr.length; i++){
        if(answer[answer.length - 1] === arr[i]) answer.pop();
        else answer.push(arr[i]);
    }

    return answer.length === 0 ? 1 : 0;
}
```

[크래인 인형뽑기 게임](https://programmers.co.kr/learn/courses/30/lessons/64061)이랑 비슷하다고 생각했고, 실제로 비슷하게 풀었다