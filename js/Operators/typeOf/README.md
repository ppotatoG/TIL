# typeof

>## [typeof](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof)

>`typeof` 연산자는 피연산자 앞에 위치합니다.

```js
const chkType = (tmp) => {
    return typeof(tmp);
}
console.log(chkType(1)); // number
console.log(chkType('1')); // string
console.log(chkType('true')); // string
console.log(chkType(false)); // boolean
console.log(chkType({a : 1})); // object
console.log(chkType([1, 2, 3, 4])); // object
```