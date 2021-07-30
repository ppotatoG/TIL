# 복습

[12912](https://github.com/ppotatoG/TIL/tree/master/programmers/12912)

### 진짜 놀랍게도 풀었던거 빼고 아무것도 기억이 안난다


i 앞에 변수 선언을 안해줘서 오류 난걸 뭔지도 모르고 다른걸로 열심히 머리굴림
```js
let arr = [];

if(a < b){
    for(i = a ; i <= b; i++){
        arr.push(i)
    }
} else if(a > b){
    for(i = b ; i <= a; i++){
        arr.push(i)
    }
} else if(a == b) return a;

const answer = arr.reduce((a, b) => a + b);

return answer;
```

덕분에 Math에 대해 알게됐다 개이득
```js
function solution(a, b){
    const arr = [];

    if(a !== b) {
        for(let i = Math.min(a, b) ; i <= Math.max(a, b); i++){
            arr.push(i)
        }
    } else return a;

    return arr.reduce((a, b) => a + b)
}
```

## 저번보다 잘 풀었다!! 만족해 !!!!