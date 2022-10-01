# 문자열 압축

[programmers](https://programmers.co.kr/learn/courses/30/lessons/60057)

[[프로그래머스] 문자열 압축(LV.2) by javascript - 2020 KAKAO BLIND RECRUITMENT
출처: https://mine-it-record.tistory.com/512 [나만의 기록들:티스토리]](https://mine-it-record.tistory.com/512)

```aidl
테스트 1 〉	통과 (0.36ms, 33.5MB)
테스트 2 〉	통과 (0.55ms, 33.6MB)
테스트 3 〉	통과 (0.62ms, 33.5MB)
테스트 4 〉	통과 (0.24ms, 33.6MB)
테스트 5 〉	통과 (0.09ms, 33.4MB)
테스트 6 〉	통과 (0.29ms, 33.5MB)
테스트 7 〉	통과 (0.60ms, 33.7MB)
테스트 8 〉	통과 (0.91ms, 33.6MB)
테스트 9 〉	통과 (0.74ms, 33.7MB)
테스트 10 〉	통과 (5.76ms, 38MB)
테스트 11 〉	통과 (0.28ms, 33.5MB)
테스트 12 〉	통과 (0.30ms, 33.4MB)
테스트 13 〉	통과 (0.29ms, 33.5MB)
테스트 14 〉	통과 (0.73ms, 33.7MB)
테스트 15 〉	통과 (0.30ms, 33.5MB)
테스트 16 〉	통과 (0.22ms, 33.6MB)
테스트 17 〉	통과 (1.15ms, 33.9MB)
테스트 18 〉	통과 (1.16ms, 34MB)
테스트 19 〉	통과 (1.10ms, 34MB)
테스트 20 〉	통과 (5.11ms, 38.2MB)
테스트 21 〉	통과 (4.05ms, 38.4MB)
테스트 22 〉	통과 (3.78ms, 38.3MB)
테스트 23 〉	통과 (3.97ms, 38.4MB)
테스트 24 〉	통과 (3.06ms, 38MB)
테스트 25 〉	통과 (4.11ms, 38.3MB)
테스트 26 〉	통과 (4.06ms, 38.5MB)
테스트 27 〉	통과 (4.10ms, 38.3MB)
테스트 28 〉	통과 (0.20ms, 33.5MB)
```
```js
const solution = s => {
    let answers = [];
    
    for(let i = 1; i <= s.length; i++) answers.push(getAnswer(s, i));
    
    return Math.min(...answers.map(e => e.join('').length));
}

const getAnswer = (str, unit) => {
    let count = 1;
    let answer = [];
    
    for(let i = 0 ; i <= str.length / unit ; i++){
        let unitStr = str.slice(unit * i, unit * i + unit);
        
        if(answer[answer.length - 1] === unitStr) {
            count++;
        } else {
            if(count > 1) answer[answer.length - 1] = count + answer[answer.length - 1];
            answer.push(unitStr);
            count = 1;
        }
    }
    
    return answer;
}
```

[다른 사람의 풀이 > 패터쓴 , - , Youngil Noh](https://school.programmers.co.kr/learn/courses/30/lessons/60057/solution_groups?language=javascript)

```aidl
테스트 1 〉	통과 (0.16ms, 33.5MB)
테스트 2 〉	통과 (0.22ms, 33.5MB)
테스트 3 〉	통과 (0.18ms, 33.5MB)
테스트 4 〉	통과 (0.16ms, 33.5MB)
테스트 5 〉	통과 (0.06ms, 33.4MB)
테스트 6 〉	통과 (0.15ms, 33.4MB)
테스트 7 〉	통과 (0.41ms, 33.5MB)
테스트 8 〉	통과 (0.28ms, 33.4MB)
테스트 9 〉	통과 (0.33ms, 33.4MB)
테스트 10 〉	통과 (1.25ms, 33.7MB)
테스트 11 〉	통과 (0.26ms, 33.5MB)
테스트 12 〉	통과 (0.18ms, 33.5MB)
테스트 13 〉	통과 (0.18ms, 33.5MB)
테스트 14 〉	통과 (0.30ms, 33.4MB)
테스트 15 〉	통과 (0.28ms, 33.6MB)
테스트 16 〉	통과 (0.15ms, 33.5MB)
테스트 17 〉	통과 (0.51ms, 33.5MB)
테스트 18 〉	통과 (0.49ms, 33.5MB)
테스트 19 〉	통과 (0.53ms, 33.5MB)
테스트 20 〉	통과 (0.94ms, 33.8MB)
테스트 21 〉	통과 (0.92ms, 33.7MB)
테스트 22 〉	통과 (1.03ms, 33.8MB)
테스트 23 〉	통과 (1.53ms, 33.7MB)
테스트 24 〉	통과 (0.99ms, 33.7MB)
테스트 25 〉	통과 (1.15ms, 33.9MB)
테스트 26 〉	통과 (0.95ms, 33.8MB)
테스트 27 〉	통과 (0.85ms, 33.7MB)
테스트 28 〉	통과 (0.15ms, 33.5MB)
```
```js
function solution(s) {
    let minLen = s.length;

    top: for (let n = 1; n <= s.length / 2; n++) {
        let curLen = 0;
        for (let i = 0; i < s.length; i += n) {
            let counter = 1;
            while (s.slice(i, i + n) === s.slice(i + n, i + 2 * n)) {
                i += n;
                counter++;
            }
            if (counter !== 1) {
                curLen += n + (counter + "").length;
            } else {
                curLen += s.length < i + n ? s.slice(i, i + n).length : n;
            }
            if (minLen <= curLen) continue top;
        }
        minLen = curLen;
    }
    
    return minLen;
}
```