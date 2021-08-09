# 복습

[42576](https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript)


이렇게 하면 간단하지만, 동명이인은 잡지 못한다
```js
function solution(p, c) {
    p.sort();
    c.sort();

    return p.pop(c);
}
```

return 은 왜 하나밖에 안되는걸까ㅜ
```js
function solution(p, c){
    p.sort();
    c.sort();

    let answer = p.filter((a, b) => {
        return p.indexOf(a) !== b;
    })

    return answer;

    if(answer.length === 0) {
        return p.pop(c)
    };
}

console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]))
```

[예전 풀이](https://github.com/ppotatoG/TIL/tree/master/programmers/42576)


```js
p.pop(c); // p 배열에서 c배열을 뺀 값이 나옴, 정답

if(answer.length === 0) {
    return p.push(answer); // 여기가 값이 아닌 글자 길이로 나옴
}else return p.pop(c); // ['string'] 이 아닌 stringd 의 형태로 나옴

```