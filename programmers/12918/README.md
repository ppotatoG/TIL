# 코딩테스트 연습 가운데 글자 가져오기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript)

## 문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

## 재한사항
- s는 길이 1 이상, 길이 8 이하인 문자열입니다.


### 제출한 정답
```js
function solution(s) {
    let result = s.replace(/[^0-9]/g, "");
    return s.length === result.length && (s.length == 4 || s.length ==  6) ? true : false ;
}
```

안된다 왜 안되는거지
```js
function solution(s) {
    if((s.length == 4 || s.length ==  6) && isNaN(s)) console.log(false); 
    else console.log(true);
}
```
2, 5, 6, 7, 11, 12, 13 실패

1. s.length == 4 || s.length == 6
2. 숫자로만 구성
3. 0 < s.length < 9 (이건 필요 없는거같은데..)

2, 5, 6, 7, 11, 12, 13 실패
```js
if(0 < s.length < 9) {
    if((s.length == 4 || s.length ==  6) && isNaN(s)) return false; 
    else return true;
}
```

isNaN도 약간 문제 있는듯
```js
function solution(s) {
    console.log(isNaN(s.toString()))
}

let s1 = "a234"; // true
let s2 = "1234"; // false

let s3 = "123456"; // false
let s4 = "fff"; // true
```

아닌데 문제는 나한테 있는 것 같다
```js
function solution(s) {
    if(isNaN(s.toString())) return false;
    else if(s.length == 4 || s.length ==  6) return true;
}
```

[Number.isNaN()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) 이 너무 어려워서 생각한 정규식
```js
let result = s.replace(/[^0-9]/g, "");

if(s.length === result.length && (s.length == 4 || s.length ==  6)) console.log(true);
else console.log(false);
```
[정규식 참고](https://jsikim1.tistory.com/38)

윤군이 알려준 match를 사용해보고 싶었지만, 응용보다 암기가 더 중요해보여서..!!


통과된 답은 이거였지만, return 을 제대로 사용하지 못하는게 억울했다
```js
function solution(s) {
    let result = s.replace(/[^0-9]/g, "");
    if(s.length === result.length && (s.length == 4 || s.length ==  6)) return true;
    else return false;
}
```

이게 왜 안되나 했더니
```js
s.length === result.length && (s.length == 4 || s.length ==  6) ? true : false
```

이렇게 하니 됐다 !
```js
return s.length === result.length && (s.length == 4 || s.length ==  6) ? true : false
```