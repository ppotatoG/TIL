# 성격 유형 검사하기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/118666)

### 제출한 정답
```js
const solution = (survey, choices) => {
    const obj = {
        R :  0,
        T :  0,

        C :  0,
        F :  0,
        
        J :  0,
        M :  0,
        
        A :  0,
        N :  0,
    }

    const test = [3, 2, 1, 0, 1, 2, 3];
    
    choices.forEach(((score, idx) => {
        if(score !== 4) {
            if(score <= 3) {
                obj[survey[idx].substring(0, 1)] += test[score - 1];
            }
            else if(score >= 5) {
                obj[survey[idx].substring(1, 2)] += test[score - 1];
            }
        }
    }))

    let answer = '';
    
    for(let i = 0; i < 8; i += 2) {
        if(Object.values(obj)[i] < Object.values(obj)[i + 1]) {
            answer += Object.keys(obj)[i + 1]
        }
        else {
            answer += Object.keys(obj)[i]
        }
    }

    return answer;
}
```

```js
const solution = (survey, choices) => {
    const obj = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    
    choices.forEach(((score, idx) => {
        const [A, B] = survey[idx].split('');
        
        if(score <= 3) {
            obj[A] += (4 - score)
        }
        else if(score >= 5) {
            obj[B] += (score - 4)
        }
    }))

    let answer = '';
    
    answer += obj['R'] >= obj['T'] ? 'R' : 'T';
    answer += obj['C'] >= obj['F'] ? 'C' : 'F';
    answer += obj['J'] >= obj['M'] ? 'J' : 'M';
    answer += obj['A'] >= obj['N'] ? 'A' : 'N';

    return answer;
}
```