# 재귀함수

[참고 블로그](https://velog.io/@jeongin/Javascript-%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98)

## 구구단만들기

### 중복문
```js
for(let i = 1; i < 10; i ++){
    console.log(`2 x ${i} = ${2*i}`);
}
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
```

### 재귀함수
```js
function f(n){
    console.log(`2 x ${n} = ${2*n}`);
    if(n === 1) return 1
    return f(n - 1);
};

f(9)

// 2 x 9 = 18
// 2 x 8 = 16
// 2 x 7 = 14
// 2 x 6 = 12
// 2 x 5 = 10
// 2 x 4 = 8
// 2 x 3 = 6
// 2 x 2 = 4
// 2 x 1 = 2
```