# indexOf()

[indexOf](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

```js
let answer = ''
let list = [1, 2, 3, 3, 3, 3, 4, 4]

for(let i = 0; i < list.length; i++){
    if(list.indexOf(list[i]) == i) answer += list[i]
}
console.log(answer) // 1234
```

```js
const fnc = (s) =>{
    return s.indexOf('love');
}
console.log(fnc(['lome,', 'live', 'love', 'lode'])) // 2
```