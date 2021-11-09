# padStart()

### [padStart](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
> `padStart()` 메서드는 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다. 채워넣기는 대상 문자열의 시작(좌측)부터 적용됩니다.

```js
let num = '987'

num.padEnd(6, 0) // '987000'

num.padStart(6, 0) // '000987'
```