# ES6 변수선언

[var](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/var) 
[let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let) 
[const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)

### 중복선언 

`var` O

`let`, `const` X

```js
let x = 1;
console.dir(x);

let x = 2; // Uncaught SyntaxError: Identifier 'x' has already been declared
```

### 재할당

`var`, `let` O

`const` X

```js
var one = 1;
let two = 2;
const three = 3;

one = 'one';
two = 'two';
three = 'three'; // Uncaught TypeError: Assignment to constant variable.
```

객체 내용 변경 가능
```js
const obj = {tmp : 1};
console.log(obj); // {tmp: 1}

obj.tmp = 2;
console.log(obj); // {tmp: 2}
```

배열 내용도 변경 가능
```js
const arr = [0, 1, 2, 3];
console.log(arr); // [0, 1, 2, 3]
arr[0] = 2;
console.log(arr); // [2, 1, 2, 3]
```

### scope

#### function-level scope

`var`

함수 내부에 선언된 변수만 지역변수로 한정하며, 나머지는 전역변수

```js
function test(){
    var x = 10;
    console.log(x);
}

test(); // 10
console.log(x); // Uncaught ReferenceError: x is not defined
```

```js
if(true) {
    var x = 10;
    console.log(x); // 10
}

console.log(x); // 10
```

#### Block-level Scope

`let`, `const`

함수 내부는 물론 if, for등 코드블럭에서 선언된 변수도 지역변수로 취급

첫줄 `x`와 조건문 내에 `x`는 다르다

```js
let x = 1;
console.log(x); // 1

if(x === 1) {
    let x = 2;
    console.log(x); // 2
}

console.log(x); // 1
```

### hoisting

`var`, `let`, `const` X

```js
console.log(x); // undefined 
var x = 10; 
console.log(x); // 10
```

```js
console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization
let x = 10; 
```

ReferenceError라고 해서 호이스팅이 안되는건 아니다

`let`과 `const`도 `호이스팅이 된다`

`let`, `const`의 호이스팅 과정이 `var`와 다르게 진행되며

이렇게 변수의 선언과 초기화 사이에 일시적으로 변수 값을 참조할 수 없는 구간을 `TDZ(Temporal Dead Zone)`라고 한다

[TDZ을 모른 채 자바스크립트 변수를 사용하지 말라](https://ui.toast.com/weekly-pick/ko_20191014)

### 전역객체 

`var`는 `전역객체의 프로퍼티`다

```js
var x = 10; 
console.log(window.x); // 10 
console.log(x); // 10
```

`let`, `const`는 `전역객체의 프로퍼티가 아니다`

```js
let x = 10; 
console.log(x); // 10
console.log(window.x); // undefined
```

[변수 선언 방식 차이: var / let / const[카레유]](https://curryyou.tistory.com/192)
