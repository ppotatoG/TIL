# filter()

[filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```js
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9]

a = a.filter((b) => b%2 == 0) // [2, 4, 6, 8]
b = b.filter((a) => a !== 1) // [2, 3, 4, 5, 6, 7, 8, 9]
```

```js
const arr1 = [2, 3, 3, 4, 4, 5, 5, 5, 6, 7]

const answer1 = arr1.filter((a, b) => {
    return arr1.indexOf(a) === b;
});

console.log(answer1) // (6) [2, 3, 4, 5, 6, 7]
```

```js
const arr2 = [5, 9, 7, 10]
const divisor = 5

const answer2 = arr2.filter((a) => {
    return a % divisor == 0
})

console.log(answer2) // [5, 10]
```