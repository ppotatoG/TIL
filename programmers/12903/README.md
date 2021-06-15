# 코딩테스트 연습 가운데 글자 가져오기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript)

## 문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

## 재한사항
- s는 길이가 1 이상, 100이하인 스트링입니다.


### 제출한 정답
```
function solution(s) {
    var answer = '';

    answer = s.length%2 == 0 ? s.charAt(s.length/2 - 1) + s.charAt(s.length/2) : s.charAt(s.length/2)

    // console.log(answer)
    return answer
}
```
<br>
삼항연산자 사용

```
function solution(s) {
    let answer = '';
    
    answer = s.length%2 == 0 ? s.charAt(s.length/2 - 1) + s.charAt(s.length/2) : s.charAt(s.length/2)

    return answer;
}
```
<br>
필요 없는 변수 버리기 (half)

```
function solution(s) {
    let answer = '';
    
    if(s.length%2 == 0) answer = s.charAt(.length/2 - 1) + s.charAt(s.length/2)
    else answer = s.charAt(s.length/2)

    return answer;
}
```

<br>
결론적으로 맞는 코드다. 통과도 했다.

하지만 깨림직 해... 뭔가 더.... 방법이 있을것이다...

```
function solution(s) {
    let answer = '';
    let half = []
    
    if(s.length%2 == 0) {
        half.push(s.length/2 - 1, s.length/2)
        answer = s.charAt(half[0]) + s.charAt(half[1])
    } else half.push(s.length/2), answer = s.charAt(half)

    return answer;
}
```
