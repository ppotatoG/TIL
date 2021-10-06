# 정규 표현식

>## [정규 표현식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions)

### var re = /ab+c/;
### var re = new RegExp("ab+c");

`/^A/` 시작부분에 대응(an A - X, An E - O)

`/t$/` 끝 부분에 대응(eater - X, eat - O)

`/bo*/` 앞의 표현식이 `0개 이상`으로 연속 반복