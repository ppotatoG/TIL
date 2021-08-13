# 코딩테스트 연습 내적

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12906)

## 제한사항
- 배열 arr의 크기 : 1,000,000 이하의 자연수
- 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

### 제출한 정답
```js
function solution(a) { 
    let answer = [];

    for(let i = 0; i < a.length + 1; i++){
        if(a[i] !== a[i + 1]) {
            answer.push(a[i])
        }
    }
    
    return answer;
}
```


대충 이렇게 하면 되겠지 했는데 안되네~

3번 연속은 하나만 삭제되고, 두번연속은 삭제되지 않는다
```js
function solution(a) { 
    for(let i = 0; i < a.length; i++){
        if(a[i] == a[i + 1]) a.shift(a[i])
    }
    
    // return a;
}
```

빼는게 안되면 추가하면 되겠지 !
```js
function solution(a) { 
    let answer = [];

    for(let i = 0; i < a.length + 1; i++){
        if(a[i] !== a[i + 1]) {
            answer.push(a[i])
        }
    }
    
    return answer;
}
```