# isNaN

>## [isNaN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN)

>isNaN() 함수는 어떤 값이 NaN인지 판별합니다. isNaN 함수는 `몇몇 일반적이지 않은 규칙`을 가지고 있으므로, ECMAScript 2015에서 추가한 `Number.isNaN()`으로 바꾸는 편이 좋을 수도 있습니다.

```js
function example(s) {
    console.log(s, isNaN(s));
}

let s1 = "a234"; // a234 true
let s2 = "1234"; // 1234 false
let s3 = "123456"; // 123456 false
let s4 = "dsae"; // dsae true
let s5 = "222"; // 222 false
let s6 = "1e22"; // 1e22 false
```