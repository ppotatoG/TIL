# [JS symbol](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

## Data type

> ### 기본형 타입(Primitive type) `값을 그대로 할당`

- [number](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)

- [string](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/string)

- [Boolean](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

- [null](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/null)

- [undefined](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)

- **[Symbol](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)**


> ### 참조형 타입(Reference type) `값이 저장된 주소값을 할당`(참조)
 
- [Object](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)

- [array](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/array)

- [function](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/function)

- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

- [Set](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)

---

## Symbol을 사용하는 이유

user name is 홍길동

user lecture is 토익 환급반

```js
// 다른 사람이 만들어 놓은 객체
const user = {
    name : '홍길동',
    lecture : '토익 환급반'
};

// 사용자가 접속하면 보는 메세지
for(let key in user) {
    console.log(`user ${key} is ${user[key]}`)
}
```
user name is 홍길동

user lecture is 토익 환급반

user showName is function() {console.log(user.name)}
```js
// 다른 사람이 만들어 놓은 객체
const user = {
    name : '홍길동',
    lecture : '토익 환급반'
};

// 내가 작업
user.showName = function() {console.log(user.name)};

// 사용자가 접속하면 보는 메세지
for(let key in user) {
    console.log(`user ${key} is ${user[key]}`)
}
```

### `캡슐화`
특정 목적을 위해 데이터와 데이터를 다루는 메서드를 묶어서 추상화


### `정보은닉`
객체지향 언어적 요소를 활용하여 객체에 대한 구체적인 정보를 노출시키지 않도록 하는 기법

[캡슐화와 정보은닉](https://frontierdev.tistory.com/93)

> ### 바꾸려는 시도 방지, 실수 방지 차원

## Symbol

### 유일무이하고 고유한 존재

```js
const sb1 = Symbol()
const sb2 = Symbol()
console.log(sb1, sb2) // Symbol() Symbol()
console.log(sb1 == sb2) // false
console.log(sb1 === sb2) // false

const sb3 = sb2
sb3 === sb2 // true
sb3 == sb2 // true
```

선언 된 `obj`내에 `Symbol`까지 `접근할 수 없음`
```js
const obj = (() => {
  const _privateMember1 = Symbol('private1')
  const _privateMember2 = Symbol('private1')
  return {
    [_privateMember1]: '외부에서 보이긴 하는데 접근할 방법이 마땅찮네',
    [_privateMember2]: 10,
    publicMember1: 20,
    publicMember2: 30
  }
})()
console.log(obj)
/*
publicMember1: 20
publicMember2: 30
Symbol(private1): "외부에서 보이긴 하는데 접근할 방법이 마땅찮네"
Symbol(private1): 10
*/

console.log(obj[Symbol('private1')]) // undefined
console.log(obj[_privateMember1]) // Uncaught ReferenceError: _privateMember1 is not defined
```

### 기본적인 열거대상에서 제외
`고유한 식별자` 이상의 의미를 지니지 않는다

```js
const NAME = Symbol('이름')
const GENDER = Symbol('성별')
const iu = {
  [NAME]: '아이유',
  [GENDER]: 'female',
  age: 26
}
const suzi = {
  [NAME]: '수지',
  [GENDER]: 'female',
  age: 26
}
const jn = {
  [NAME]: '재남',
  [GENDER]: 'male',
  age: 30
}

console.log(iu, suzi, jn)
/*
{age: 26, Symbol(이름): '아이유', Symbol(성별): 'female'} 
{age: 26, Symbol(이름): '수지', Symbol(성별): 'female'} 
{age: 30, Symbol(이름): '재남', Symbol(성별): 'male'}
*/

for (const prop in iu) {
  console.log(prop, iu[prop])
}
// age 26
```

### 공유심볼 

[symbol.for()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for)

- 문자열로 접근 가능
- 상수처럼 쓴다?..

```js
const obj = (() => {
  const COMMON1 = Symbol.for('공유심볼')
  return {
    [COMMON1]: '공유할 프로퍼티 키값이에요. 어디서든 접근 가능하답니다.'
  }
})()
const COMMON2 = Symbol.for('공유심볼')
console.log(obj[COMMON2]) // 공유할 프로퍼티 키값이에요. 어디서든 접근 가능하답니다.
console.log(COMMON1 === COMMON2) // true
```

[symbol.keyfor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor)

`symbol`의 `key`값을 문자열로 추출

```js
const UNCOMMON = Symbol('비공유심볼')
const commonSymbolKey1 = Symbol.keyFor(COMMON1) // 공유심볼
const commonSymbolKey2 = Symbol.keyFor(COMMON2) // 공유심볼
const commonSymbolKey2 = Symbol.keyFor(UNCOMMON) // undefined
```

### 표준 심볼

기존 사용되던 표준 내장 객체를 커스텀?..?

```js
const str = '이 _ 문자열을 _ 이렇게 _ 나누어주었으면 _ 좋겠어.'
String.prototype[Symbol.split] = function (string) {
  let result = ''
  let residue = string
  let index = 0
  do {
    index = residue.indexOf(this)
    if(index <= -1) {
      break
    }
    result += residue.substr(0, index) + '/'
    residue = residue.substr(index + this.length)
  } while (true)
  result += residue
  return result
}
console.log(str.split(' _ ')) // 이/문자열을/이렇게/나누어주었으면/좋겠어.
```

```js
str.split(' _ ') // ['이', '문자열을', '이렇게', '나누어주었으면', '좋겠어.']
str.split(' _ ').join('/') // '이/문자열을/이렇게/나누어주었으면/좋겠어.'
```