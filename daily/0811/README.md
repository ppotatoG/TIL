# 복습


[어제 이어서](https://github.com/ppotatoG/TIL/tree/master/daily/0810)


답도 못맞추겠어서 예전에 했던 답을 보고 왔다
```js
function solution(p, c){
    p.sort();
    c.sort();

    for(let i = 0; i < p.length; i++){
        if(p[i] !== c[i]) return p[i];
    }
}
```

다른 사람 풀이 봐도 내가 할 수 있는 방법은 이게 최선인듯 !

---

[42748](https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript)

일단은 정답, 근데 예전 코드랑 똑같을 것 같다

```js
function solution(a, c){    
    let arr = [];
    let answer = [];

    for(let n = 0; n < c.length; n++){
        arr = a.slice(c[n][0] - 1, c[n][1]);
        answer.push(arr.sort((a, b) => a - b)[c[n][2] -1]);
    }
    return answer;
}
```
<br>

여러가지 정답들이 많지만, 일단 다들 나와 다른? `return` 을 사용하는 것 같다

`return`은 너무 어렵다

<br>

arr 선언 하지않고 answer에 바로 push하기

```js
function solution(a, c){    
    let answer = [];

    for(let n = 0; n < c.length; n++){
        answer.push(a.slice(c[n][0] - 1, c[n][1]).sort((a, b) => a - b)[c[n][2] -1])
    }
    return answer;
}
```
내 최선은 딱 이정도인듯;

복습중이니까 괜찮아!