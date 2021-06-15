# substring()

### [substring](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
substring() 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다. 

```
let s = '만천하의 새 이는 가슴에 그러므로 들어 것이다.'

console.log(s.substring(0, 1)) // 만
console.log(s.substring(1, 0)) // 만

console.log(s.substring(14, 18)) // 그러므로
console.log(s.substring(18, 14)) // 그러므로

console.log(s.substring(14)) // 그러므로 들어 것이다.
console.log(s.substring(1)) // 만천하의 새 이는 가슴에 그러므로 들어 것이다.

console.log(s.substring(1, 1)) // blank

```