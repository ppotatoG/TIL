# split()

>## [split](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)
>split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.

```js 
let s = '만천하의 새 이는 가슴에 그러므로 들어 것이다.'

const word = s.split(" ") 
// (7) ["만천하의", "새", "이는", "가슴에", "그러므로", "들어", "것이다."]

const word04 = s.split(" ", 4)
// (4) ["만천하의", "새", "이는", "가슴에"]

const letter = s.split("")
// (26) ["만", "천", "하", "의", " ", "새", " ", "이", "는", " ", "가", "슴", "에", " ", "그", "러", "므", "로", " ", "들", "어", " ", "것", "이", "다", "."]

const keyword = s.split("그러")
// (2) ["만천하의 새 이는 가슴에 ", "므로 들어 것이다."]
// "그러를" 기준으로 잘림
```