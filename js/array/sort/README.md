# sort()

[sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```
let arr = [1, 2, 3, 10000] 
```
```
arr.sort() // [1, 10000, 2, 3]
```
[문제있다](https://github.com/ppotatoG/TIL/tree/master/programmers/42748)

[참고한 글 1](https://devowen.com/277)

## 정렬하기 위해서는 파라미터(compareFunction)를 활용
[출처](https://hianna.tistory.com/409)

```
arr.sort(function(a, b){
    if(a > b) return 1
    else if(a === b) return 0
    else return -1

    // [1, 2, 3, 10000]
})
```

