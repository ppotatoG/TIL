# 복습 - 체육복

[@leeeunbin/프로그래머스-체육복-JavaScript](https://velog.io/@leeeunbin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%B2%B4%EC%9C%A1%EB%B3%B5-JavaScript)

### `filter` VS `find`

- filter의 반환값은 배열

- find는 일치하는 값 하나

arr2에 arr1과 일치하는 값이 있다면, arr1에 해당값 삭제
```js
arr1.filter((val) => !arr2.includes(val));
```

절대값을 확인 하는 [Math.abs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)를 사용하며, 배열 내 값을 확인해야 하는데,

특정값을 남기고 삭제를 해야 하기 때문에 splice기능이 되는 filter 사용

### !extra

- extra가 `undefined`면 `false`
- return true로 값 반환

```js
if(!extra) return true;
```

### 매소드 내의 `callback`값

같은 문자열의 `val2`는 해당 줄의 콜백값으로 동일해도 무관

```js
return n - Lost.filter((val) => {
    // val2
    let extra = Reserve.find((val2) => Math.abs(val2 - val) <= 1);
    console.log(extra)
    if(!extra) return true;

    // val2
    Reserve = Reserve.filter((val2) => val2 !== extra);
}).length;
```

### Math.abs

`4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다`

본인의 -1 또는 +1 학생이므로 절대값 1

```js
let extra = Reserve.find((val2) => Math.abs(val2 - val) <= 1);
```