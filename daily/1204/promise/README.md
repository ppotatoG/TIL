# [promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## promise 선언

```js
const promise = new Promise((resolve, reject) => {
    console.log('doing something');
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network'));
    }, 2000);
})

// doing something
// undefined => resolve의 값이 정의되지 않음
```

## promise 사용하기

### [resolve](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)

메서드는 주어진 값으로 이행하는 Promise.then 객체를 반환

### [reject](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)

주어진 이유(reason)로 거부된 Promise 객체를 반환합니다.

### [finally](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

Promise가 처리되면 충족되거나 거부되는지 여부에 관계없이 지정된 콜백 함수가 실행
```js
promise
.then((val) => {
    console.log(val);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
})
```

## promise 연결하기

`then`을 이어서 값 반환하기

```js
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000)
})

fetchNumber
.then((num) => num * 2)
.then((num) => num + 3)
.then((num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    })
})
.then((num) => console.log(num)) // 4
```