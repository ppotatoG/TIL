# replace()

>## [replace](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
>replace() 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환합니다. 그 패턴은 문자열이나 정규식(RegExp)이 될 수 있으며, 교체 문자열은 문자열이나 모든 매치에 대해서 호출된 함수일 수 있습니다.

```js
const text = "안녕? Hi! 123456789.0";
const numRegex = /[^0-9]/g;
const txtRegex = /[0-9]/g;

const numResult = t => t.replace(numRegex, "");
const txtResult = t => t.replace(txtRegex, "");

console.log(numResult(text)); // 1234567890
console.log(txtResult(text)); // 안녕? Hi! .
```

```js
console.log("zero4zero".replace('zero', 0)); // 04zero
console.log("zero4zero".replace(/zero/, 0)); // 04zero
console.log("zero4zero".replace(/zero/g, 0)); // 040
```