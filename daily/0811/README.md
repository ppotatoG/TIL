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