# 동기 비동기

### 동기
- 동시에 일어나는

### 비동기
- 동시에 일어나지 않는

```js
(function test() {
    console.log('111');
    setTimeout(() => {
        console.log('222');
    }, 2000);
    console.log('333');
}
())

// 111
// 333
// 2초 후 => 동시에 일어나지 않음
// 222
```