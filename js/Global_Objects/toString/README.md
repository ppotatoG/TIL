# toString

>## [toString](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/toString)

>`toString()` 은 문자열을 반환하는 object의 대표적인 방법이다

```js
function string(str){
    return str.toString();
}
console.log(string(123)); // 123 (문자열)
```

값을 비교할 때, 문자 또는 숫자로 변경하지 않고 toString해서 비교
```js
if(pw[j].toString() === newArr[i].toString()){
    // code
}
```

숫자 3진법으로 변경하기
```js
function solution(n) {
    return n.toString(3); // 1200
}
````