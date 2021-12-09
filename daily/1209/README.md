# 배열의 내의 특정 값 찾기


## 예제로 사용될 임시 배열 `array`!
```js
const array = ['apple', 'banana', 'lemon', 'melon', 'peach'];
```

## includes

해당 값이 있는지 판별 후 `불리언값 반환`

```js 
const includes = (srt) => {
    return array.includes(srt);
}

console.log(includes('apple')); // true
console.log(includes('cherry')); // false 
```

## indexOf

array내 'melon'의 `index를 가져옴`, 값이 없으면 `-1 반환`

```js 
const indexOf = (srt) => {
    return array.indexOf(srt);
}

console.log(indexOf('melon')); // 3
```

## filter

값이 `일치`하면 `요소 유지`, `불일치` 시 `요소 버림`

```js
const filter = (arr, str) => {
    return arr.filter(val => val === str)
}

console.log(filter(array, 'banana')); // ['banana'] 
```

## find

함수를 만족하는 `첫번째 요소`의 `값 반환`

```js
const find = (arr, str) => {
    return arr.find(val => val === str)
}

console.log(find(array, 'banana')); // 'banana' 
```

## findIndex

함수를 만족하는 `첫번째 요소의 인덱스 반환`, 값이 없으면 `-1 반환`

```js
const findIndex = (arr, str) => {
    return arr.findIndex(val => val === str)
}

console.log(findIndex(array, 'banana')); // 1
```

## some

배열에 `맞는 값이 있는지`의 여부, 배열 중 값이 `하나라도 있으면 true`

```js
const some = (arr, str) => {
    return arr.some(val => val === str)
}

console.log(some(array, 'lemon')); // true
console.log(some(array, 'plum')); // false 
```