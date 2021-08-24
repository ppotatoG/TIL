# repeat()

### [repeat](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
`repeat()` 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.

```js
function fnc(n){
    const result = ".수박";

    return result.repeat(n);
  }

console.log(fnc(5)); // 수박수박수박수박수박
```