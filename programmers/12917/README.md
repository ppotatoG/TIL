# 코딩테스트 연습 내적

[programmers](https://programmers.co.kr/learn/courses/30/lessons/70128)

## 제한사항
- a, b의 길이는 1 이상 1,000 이하입니다.
- a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

### 제출한 정답
```js
function solution(a, b) {
    let answer = 0 ;

    for(let i = 0; i < a.length; i ++) answer += a[i] * b[i] ;

    // return answer;
    console.log(answer);
}
```

### [reduce](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 를 이용

[참고 블로그 1](https://velog.io/@ansrjsdn/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Level-1-%EB%82%B4%EC%A0%81-javascript)
[참고 블로그 2](https://jsikim1.tistory.com/150)

[reduce 정리](https://github.com/ppotatoG/TIL/tree/master/js/array/reduce)