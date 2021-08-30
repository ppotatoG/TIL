# 숫자 문자열과 영단어


[programmers](https://programmers.co.kr/learn/courses/30/lessons/81301)

### 제출한 정답

```js
function solution(s) {
    return Number(s.replace(/zero/g, 0).replace(/one/g, 1).replace(/two/g, 2).replace(/three/g, 3).replace(/four/g, 4).replace(/five/g, 5).replace(/six/g, 6).replace(/seven/g, 7).replace(/eight/g, 8).replace(/nine/g, 9));
}
console.log(solution("one4seveneightone"));
```