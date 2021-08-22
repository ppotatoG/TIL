# 에라토스테네스의 체

[에라토스테네스의 체](https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4)

대충 열심히 요약해보면...
```js
11² > 120 // decimal 은 11 전 소수까지 ?

let decimal = [2, 3, 5, 7, ...] 

for(let i = 1; i < 120; i++){
    n % decimal[i] !== 0 
}
```

이게 맞나;;..;,,,;,;,

<br>

[2, 3, 5, 7] 을 배열로 쓰고싶었지만 안된다
더하면 알고리즘 싫어질거 같으니까 여기까지만 하자
```js
function fnc(){
    let arr = [2, 3, 5, 7];

    for(let i = 2; i < 120; i++){
        if((i % 2 !== 0) && (i % 3 !== 0) && (i % 5 !== 0) && (i % 7 !== 0)) {
            arr.push(i);
        }
    }

    return arr;
}

console.log(fnc());
```