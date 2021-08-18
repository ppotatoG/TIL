# splice()

[splice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```
let arr = [1, 2, 3, 4, 1, 2, 4, 1, 2, 3, 4, 2]

console.log(arr)

for(let i = 0; i < arr.length; i ++) {
    if(arr[i] == 4) {
        arr.splice(i, 1) // arr[i] 값 삭제
        i-- // 삭제로 인해 짧아진 length --
    }
}
console.log(arr) //[1, 2, 3, 1, 2, 1, 2, 3, 2]

```

[참조](https://hianna.tistory.com/489)