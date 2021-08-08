# 복습

[12917](https://github.com/ppotatoG/TIL/tree/master/programmers/12917)

spilt이랑 sort까진 확실한데 그 뒤가 기억이 안나서 검색하다가 정답을 봐버렸다.. 찝찝해ㅜㅠ
```js
function solution(s){
    return s.split('').sort().reverse().join('');
}

console.log(solution("Zbcdefg"));
```