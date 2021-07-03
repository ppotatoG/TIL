# 코딩테스트 연습 가운데 글자 가져오기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript)

## 문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

## 재한사항
- s는 길이 1 이상, 길이 8 이하인 문자열입니다.


### 제출한 정답
```js
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