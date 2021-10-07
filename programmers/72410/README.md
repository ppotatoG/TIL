# 신규 아이디 추천

[programmers](https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript)

### 제출한 정답
```js
```

않됂다 외않돼지 퇴근하고 두시간동안 한건데......
```js
function solution(str) {
    let filterStrings = ['-', '_', '.', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'y', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    
    let string = str.split('')
    .map((val) => val === val.toUpperCase() ? val = val.toLowerCase() : val) // 대문자에서 소문자
    .filter(val => filterStrings.some(v => val.includes(v))) // filterStrings
    .join('') // 합침
    .replace(/\.{2,}/g, '.'); // 연속된 마침표

    if(string.split('')[0] === '.') string = string.slice(1); // 마침표 처음
    if(string.split('')[string.length - 1] === '.') string = string.slice(0, -1); // 마침표 끝

    if(str.length === 0) string = 'a'; // 빈 문자열

    if(string.length > 16) {
        string = string.slice(0, 15) // 16 이상
        if(string.split('')[string.length - 1] === '.') string = string.slice(0, -1); // 마침표 끝
    }

    if(string.length < 3) string = string.split('')[string.length - 1].repeat(3)

    return string;
}
```

1. 빈 문자열일 때 `str.length` => `answer.length`
2. 16자 이상 `string.length > 16` => `string.length > 15`
3. 2자 미만일 때 `기존 문자열에 +=`, repeat(`n`)

```js
function solution(str) {
    let filterStrings = ['-', '_', '.', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'y', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    
    let answer = str.split('')
    .map((val) => val === val.toUpperCase() ? val = val.toLowerCase() : val) // 대문자에서 소문자
    .filter(val => filterStrings.some(v => val.includes(v))) // filterStrings
    .join('') // 합침
    .replace(/\.{2,}/g, '.'); // 연속된 마침표

    if(answer.split('')[0] === '.') answer = answer.slice(1); // 마침표 처음
    if(answer.split('')[answer.length - 1] === '.') answer = answer.slice(0, -1); // 마침표 끝

    if(answer.length === 0) answer = 'a'; // 빈 문자열

    if(answer.length > 15) {
        answer = answer.slice(0, 15) // 16 이상
        if(answer.split('')[answer.length - 1] === '.') answer = answer.slice(0, -1); // 마침표 끝
    }

    if(answer.length < 3) answer += answer.split('')[answer.length - 1].repeat(3 - answer.length) // 2자 미만일 때 반복

    return answer;
}
```

26개중에 3개 빼고 통과면 ㅆㅅㅌㅊ지!