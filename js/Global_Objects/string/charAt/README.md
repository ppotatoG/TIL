# charAt()

### [charAt](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
`charAt()` 함수는 문자열에서 특정 인덱스에 위치하는  유니코드 단일문자를 반환합니다

```js
let s = '만천하의 새 이는 가슴에 그러므로 들어 것이다.'

let first = s.charAt() // 인자를 생략하면 기본값으로 0를 설정되고 첫 문자를 반환
let last = s.charAt(s.length - 1) //마지막 문자 순번은 stringName.length - 1

// 문자열 내의 모든 문자 얻기
let all = '' 
for(let i = 0; i <s.length; i++)  {
    all += s.charAt(i)
}

console.log(first) // 만
console.log(last)  // .
console.log(all)
```