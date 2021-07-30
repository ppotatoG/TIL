# 복습

[12903](https://github.com/ppotatoG/TIL/tree/master/programmers/12903)

```js
var answer = '';

s.length % 2 == 0? answer = s.substring((s.length / 2 - 1), (s.length / 2 + 1)) : answer = s.substring((s.length / 2 - .5 ), (s.length / 2 + .5))

return answer
```