# class

## 생성자 함수? class?

~~모르겠다~~
```js
// ES5, 생성자 함수
function Person1 (name) {
  this.name = name
}
Person1.prototype.getName = function () {
  return this.name
}
Person1.isPerson = function (obj) {
  return obj instanceof this
}
const jn1 = new Person1('재남')
console.log(jn1.getName())
console.log(Person1.isPerson(jn1))


// ES6, class
class Person2 {
  constructor (name) { this.name = name }
  getName () { return this.name }
  static isPerson (obj) { return obj instanceof this }
}
const jn2 = new Person2('재남2')
console.log(jn2.getName())
console.log(Person2.isPerson(jn2))
```

[생성자 함수와 class의 차이](https://velog.io/@ansrjsdn/%EC%83%9D%EC%84%B1%EC%9E%90-%ED%95%A8%EC%88%98%EC%99%80-class%EC%9D%98-%EC%B0%A8%EC%9D%B4)
