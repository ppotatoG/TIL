# 복습

[12903](https://github.com/ppotatoG/TIL/tree/master/programmers/12903)

```js
var answer = '';

s.length % 2 == 0? answer = s.substring((s.length / 2 - 1), (s.length / 2 + 1)) : answer = s.substring((s.length / 2 - .5 ), (s.length / 2 + .5))

return answer
```


[charAt](https://github.com/ppotatoG/TIL/tree/master/js/string/charAt)
[substring](https://github.com/ppotatoG/TIL/tree/master/js/string/substring)


substring에서 두번째로 들어오는 매개변수 왜 저런지 잘 모르겠다 무슨 생각으로 저렇게 했을까

[12910](https://github.com/ppotatoG/TIL/tree/master/programmers/12910)

```js
let answer = []
arr.forEach(item => {
    if(item % divisor == 0) {
        answer.push(item);
        answer = answer.sort((a, b) => a - b);
    }
});

if(answer.length == 0) answer.push(-1);

return answer;
```