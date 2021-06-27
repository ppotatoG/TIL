# Array

### 배열 내에서 중복 제거

<br>

#### 1. filter 안에서 indexOf 사용
```js
const test = arr.filter((a, b) => {
    return arr.indexOf(a) === b;
});
```
<br>

#### 2. 중복문 내에서 조건문으로 indexOf 사용하여 배열에 값 추가
```js
let test = []

for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) == i) test.push(arr[i])
}
```
- 중복문사용으로 1번보다 비효율적이지 않을까 ?