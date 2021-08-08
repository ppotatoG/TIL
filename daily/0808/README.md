# 복습

[12917](https://github.com/ppotatoG/TIL/tree/master/programmers/12917)

spilt이랑 sort까진 확실한데 그 뒤가 기억이 안나서 검색하다가 정답을 봐버렸다.. 찝찝해ㅜㅠ
```js
function solution(s){
    return s.split('').sort().reverse().join('');
}

console.log(solution("Zbcdefg"));
```

[예전 풀이](https://github.com/ppotatoG/TIL/tree/master/programmers/12918)

이건 그냥.. 함수를 어케 콘솔로 보는지 방법을 알아서 짧아진듯

--- 
[12918](https://github.com/ppotatoG/TIL/tree/master/programmers/12918)

테스트 5, 6 안되길래 찾아보니 length 넣어주라길래 어렵지 않게 풀었다
```js
function solution(s){
    const regex = /[0-9]/g;
    return s.match(regex).length == 4 || s.match(regex).length == 6 ? true : false;
}

console.log(solution("a234"));
console.log(solution("1234"));
```


[예전 풀이](https://github.com/ppotatoG/TIL/tree/master/programmers/12918)

예전 코드랑 크게 다르진 않지만, 그래도 확실히 다른건 알겠다

--- 
[12954](https://github.com/ppotatoG/TIL/tree/master/programmers/12954)

```js
function solution(a, b){
    let arr = [];
    for(let i = 1; i < b + 1; i ++){
        arr.push(a * i)
    }
    return arr
}

console.log(solution(2, 5));
```

[예전 풀이](https://github.com/ppotatoG/TIL/tree/master/programmers/12954)

예전이랑 띄어쓰기까지 같은것 같은뎁;

그래도 지금까지 나로썬 이게 최대다 잘했어 !