# parseInt

>## [parseInt](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

>`parseInt()` 함수는 문자열 인자를 구문분석하여 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수를 반환합니다.

```js
function fnc(num, r){
    return parseInt(num, r);
}
console.log(fnc(11, 16)); // 17
console.log(fnc(101, 16)); // 257
console.log(fnc(1011, 16)); // 4113
````