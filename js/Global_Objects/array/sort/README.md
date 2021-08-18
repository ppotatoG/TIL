# sort()

[sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```js
let arr = [1, 2, 3, 10000] 
arr.sort() // [1, 10000, 2, 3]
```
[문제있다](https://github.com/ppotatoG/TIL/tree/master/programmers/42748)

[참고한 글 1](https://devowen.com/277)

## 정렬하기 위해서는 파라미터(compareFunction)를 활용
[출처](https://hianna.tistory.com/409)

```js
arr.sort(function(a, b){
    if(a > b) return 1
    else if(a === b) return 0
    else return -1

    // [1, 2, 3, 10000]
})
```

```js
arr.sort((a, b) => a - b) // [1, 2, 3, 3, 4, 6, 6, 8] 오름차순
list.sort((a, b) => b - a) // [8, 6, 6, 4, 3, 3, 2, 1] 내림차순
```

