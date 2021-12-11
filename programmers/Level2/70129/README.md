# 이진 변환 반복하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/70129)


## 제출한 답

0삭제마다 count 해줄 `delZero`

중복을 돌 때마다 count 해줄 `loof`

`s >= 1`로 `while`을 시작해 

[includes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes)로 `s`에 0이 있는지 판별,

[replace](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)로 0 삭제,

0 삭제마다 `delZero++`

0이 삭제된 `s`의 길이를 2진수로 변환시킨 후

중복이 새로 돌기 전에 `loof++`

// 

`while`은 정말이지 너무 어렵다ㅜㅜ

않이 처음 while시킬 때 `s >= 1`로 돌았는데 `if(s == 1) break;`이 왜 들어가야 하지?

break를 넣지 않으면 while을 사용할 수 없는 몸이 되버린걸까나..

```js
function solution(s) {    
    let delZero = 0;
    let loof = 0;

    while(s >= 1){
        if(s.includes('0')) {
            while(s.includes('0')){
                s = s.replace(/0/, '');
                delZero++;
            }
        }
        s = s.length.toString(2);
        loof++;

        if(s == 1) break;
    }

    return [loof, delZero]
}
```