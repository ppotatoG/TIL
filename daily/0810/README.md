# 복습


[어제 이어서](https://github.com/ppotatoG/TIL/tree/master/daily/0809)

이걸 어떻게 잘 하면 될 것 같은데 너무 아쉽다

일단은 답을 맞추는것만이라도 해보자
```js
return p.pop(c);
```

머리에 reduce밖에 안든것 같다
진짜 굳은 기분이야
```js
function solution(p, c){
    p.sort();
    c.sort();

    let reducer = (a, c) => {
        if(!a[c]) a[c] = 1;
        else a[c] = a[c] + 1;
        return a;
    }

    let pReduce = p.reduce(reducer, {});

    console.log(pReduce);

    for( i of p){
        console.log(p, i);
    }

    for( i in p){
        console.log(p, i);
    }
}
```