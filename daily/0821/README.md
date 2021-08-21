# 특정 문자열 갯수 구하기

match에 들어간 값이 없으면, error 반환
```js
function solution(str, t){
    return (str.match(/아/g)).length;
}

console.log(solution('아이이이아이아이이아이이이이이아아이이아아'));
```

이렇게 하면 error 안뜸
```js
function solution(str, t){
    return (str.match(/아/g) || []).length;
}

console.log(solution('이이이이이이이이이이이이이'));
```

[참고 블로그](https://ktsmemo.cafe24.com/s/javascript/577)

[Logical OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)