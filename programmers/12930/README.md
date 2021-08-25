# 이상한 문자 만들기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12930)

### 제출한 정답
```js
function solution(s) {
    let arr = s.split(" ");
    let answer = '';

     arr.forEach((item) => {
         for(let i = 0; i < item.length; i++){
             i % 2 == 0 ? answer += item[i].toUpperCase() : answer += item[i].toLowerCase();
         }
         answer += " ";
     })

     return answer.slice(0, -1);
}
```

`map` 사용한 다른사람 답
```js
function toWeirdCase(s){
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}
```