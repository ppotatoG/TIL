# 다트게임

[programmers](https://programmers.co.kr/learn/courses/30/lessons/17682)

### 제출한 정답
```js
```

숫자가 삭제되서 잘린다,.,,..,,
```js
function solution(str) {
    return str.split(/[0-9]/); // ['', 'S', 'D*', 'T']
}
```

이게 되네 진짜 대박 뿌듯하다 알고리즘 너무 재밋다..
```js
function solution(str) {
    let arr = 
    str.split('') // srt을 하나씩 자름
    .map((val) => {
        return Number(val) == val ? val = ' ' + val : val 
        // 자른 값이 number로 바뀌었을 때, NaN이 아닌 val과 값이 같을 때 (==) 값 앞에 공백 추가
    })
    .join('') // 배열 합친 후
    .split(' ') // 공백으로 자르기
    .slice(1); // 배열의 첫번째 삭제 (공백)
    
    return arr // ['1S', '2D*', '3T']
}
```

근데 또 옵션 생각할라니까 머리 하나도 안돌아가는데.......

숫자가 10이면 1, 0으로 잘려버리네... 진짜 화나 휴;;

`replace`로 해보고싶은데.. 이거또한 어렵다
```js
function solution(str) {
    let arr = 
    str.split('')
    .map((val) => {
        return Number(val) == val ? val = ' ' + val : val
    })
    .join('')
    .split(' ')
    .slice(1);
  
    arr = arr.map((val) => {
        let num = Number(val[0]);

        if(val.length === 2) {
            if (val[1] === 'S') return val = num ** 1;
            if (val[1] === 'D') return val = num ** 2;
            if (val[1] === 'T') return val = num ** 3;
        }

        else return val;
    })

    console.log(arr.join(' + '))
    return arr;
}
```

`10`을 어떻게 바꿔줘야 하는지 잘 모르겠어서 구글링좀 했다

[참고 블로그](https://latte-is-horse.tistory.com/136)

중간에 `replace`로 10만 다른걸로 바꿔줌

특수문자 처리는 어떻게 해야할지 잘 모르겠네....

```js
function solution(str) {
    const num = new Array(10).fill(0).map((val, idx) => val = idx + 1);
    
    let arr = 
    str.replace(/10/, 'ten')
    .split('')
    .map((val) => Number(val) == val || val === 't' ? val = ' ' + val : val)
    .join('')
    .split(' ')
    .slice(1);
    
    arr = arr.map((val) => {
        let num = Number(val[0]);

        if(val.length === 2) {
            if (val[1] === 'S') return val = num ** 1;
            if (val[1] === 'D') return val = num ** 2;
            if (val[1] === 'T') return val = num ** 3;
        }

        else if(val.slice(0, 3) === 'ten') {
            if (val[3] === 'S') return val = 10 ** 1;
            if (val[3] === 'D') return val = 10 ** 2;
            if (val[3] === 'T') return val = 10 ** 3;
        } 

        else return val;
    })

    return arr
}
```

알고리즘 풀면서.. 테스트 할 때가 가장 쫄깃하고 기분 좋은 것 같다

통과가 될까...... 역시 안되겠지만 될 수도 있지 않을까... 하는 쫄깃한 마음

테스트 8에서 안된다고 한다
```js
function solution(str) {
    const num = new Array(10).fill(0).map((val, idx) => val = idx + 1);
    
    let arr = 
    str.replace(/10/, 'ten')
    .split('')
    .map((val) => Number(val) == val || val === 't' ? val = ' ' + val : val)
    .join('')
    .split(' ')
    .slice(1);
    
    arr = arr.map((val, idx, arr) => {
        let num = Number(val[0]);

        if(val.length === 2) {
            if (val[1] === 'S') return val = num ** 1;
            if (val[1] === 'D') return val = num ** 2;
            if (val[1] === 'T') return val = num ** 3;
        }

        if((val.slice(-1) !== '*' && val.slice(-1) !== '#') && val.slice(0, 3) === 'ten') {
            if (val[3] === 'S') return val = 10 ** 1;
            if (val[3] === 'D') return val = 10 ** 2;
            if (val[3] === 'T') return val = 10 ** 3;
        } 

        else if(typeof(val) === 'string') {
            if(val.slice(-1) === '*'){
                if (val[1] === 'S') return val = 2 * (num ** 1) + '*';
                if (val[1] === 'D') return val = 2 * (num ** 2) + '*';
                if (val[1] === 'T') return val = 2 * (num ** 3) + '*';
            }
            if(val.slice(-1) === '#'){
                if (val[1] === 'S') return val = -1 * (num ** 1);
                if (val[1] === 'D') return val = -1 * (num ** 2);
                if (val[1] === 'T') return val = -1 * (num ** 3);
            }
        }

        else return val;
    })

    for(let i = 0; i < arr.length; i++){
        if(String(arr[i]).slice(-1) === '*') {
            arr[i - 1] *= 2;
            arr[i] = Number(arr[i].slice(0, 1));
        }
    }

    return arr.reduce((a, b) => a + b);
}
```

4 ~ 7, 24 빼고 통과했다
```js
function solution(str) {
    const num = new Array(10).fill(0).map((val, idx) => val = idx + 1);
    
    let arr = 
    str.replace(/10/, 'ten')
    .split('')
    .map((val) => Number(val) == val || val === 't' ? val = ' ' + val : val)
    .join('')
    .split(' ')
    .slice(1);

    arr = arr.map((val, idx, arr) => {
        let num = Number(val[0]);
        
        if(val.length === 2) {
            if (val[1] === 'S') return val = num ** 1;
            if (val[1] === 'D') return val = num ** 2;
            if (val[1] === 'T') return val = num ** 3;
        }
        
        if((val.slice(-1) !== '*' && val.slice(-1) !== '#') && val.slice(0, 3) === 'ten') {
            if (val[3] === 'S') return val = 10 ** 1;
            if (val[3] === 'D') return val = 10 ** 2;
            if (val[3] === 'T') return val = 10 ** 3;
        } 
        
        else if(typeof(val) === 'string') {
            if(val.slice(-1) === '*'){
                if (val[1] === 'S') return val = 2 * (num ** 1) + '*';
                if (val[1] === 'D') return val = 2 * (num ** 2) + '*';
                if (val[1] === 'T') return val = 2 * (num ** 3) + '*';
            }
            if(val.slice(-1) === '#'){
                if (val[1] === 'S') return val = -1 * (num ** 1);
                if (val[1] === 'D') return val = -1 * (num ** 2);
                if (val[1] === 'T') return val = -1 * (num ** 3);
            }
        }
        
        else return val;
    })

    console.log(arr);

    for(let i = 0; i < arr.length; i++){
        if(String(arr[i]).slice(-1) === '*') {
            if(arr[i - 1] === undefined ){
                arr[i] = Number(arr[i].slice(0, 1));
            } else {
                arr[i - 1] *= 2;
                arr[i] = Number(arr[i].slice(0, -1));
            }
        }
    }
    
    return arr.reduce((a, b) => a + b);
}
```
`console.log(solution('10S2D*10T#')); // 10S + 2D* + 10T#, 10 * 2 + 8 + -(1000)` 이걸로 오류 찾음

그래도 24번은 안된다ㅎㅋㅋ

`map`부분 어떻게 하면 될거같은데 코드가 하도 길어서 짜증나 ㅜㅅㅜ
```js
function solution(str) {
    const num = new Array(10).fill(0).map((val, idx) => val = idx + 1);
    
    let arr = 
    str.replace(/10/g, 'ten')
    .split('')
    .map((val) => Number(val) == val || val === 't' ? val = ' ' + val : val)
    .join('')
    .split(' ')
    .slice(1);

    arr = arr.map((val, idx, arr) => {
        let num = Number(val[0]);
        
        if(val.length === 2) {
            if (val[1] === 'S') return val = num ** 1;
            if (val[1] === 'D') return val = num ** 2;
            if (val[1] === 'T') return val = num ** 3;
        }
        
        if((val.slice(4, 5) !== '*' && val.slice(4, 5) !== '#') && val.slice(0, 3) === 'ten') {
            if (val[3] === 'S') return val = 10 ** 1;
            if (val[3] === 'D') return val = 10 ** 2;
            if (val[3] === 'T') return val = 10 ** 3;
        } 
        
        else if(typeof(val) === 'string') {
            if(val.slice(-1) === '*'){
                if (val[1] === 'S') return val = 2 * (num ** 1) + '*';
                if (val[1] === 'D') return val = 2 * (num ** 2) + '*';
                if (val[1] === 'T') return val = 2 * (num ** 3) + '*';
            }
            if(val.slice(-1) === '#'){
                if (val[1] === 'S') return val = -1 * (num ** 1);
                if (val[1] === 'D') return val = -1 * (num ** 2);
                if (val[1] === 'T') return val = -1 * (num ** 3);
            }
            if(val.slice(0, 3) === 'ten'){
                num = 10;
                if(val.slice(-1) === '*'){
                    if (val.slice(-2, -1) === 'S') return val = 2 * (num ** 1) + '*';
                    if (val.slice(-2, -1) === 'D') return val = 2 * (num ** 2) + '*';
                    if (val.slice(-2, -1) === 'T') return val = 2 * (num ** 3) + '*';
                }
                if(val.slice(-1) === '#'){
                    if (val.slice(-2, -1) === 'S') return val = -1 * (num ** 1);
                    if (val.slice(-2, -1) === 'D') return val = -1 * (num ** 2);
                    if (val.slice(-2, -1) === 'T') return val = -1 * (num ** 3);
                }
            }
        }
        
        else return val;
    })

    for(let i = 0; i < arr.length; i++){
        if(String(arr[i]).slice(-1) === '*') {
            if(arr[i - 1] === undefined ){
                arr[i] = Number(arr[i].slice(0, 1));
            } else {
                arr[i - 1] *= 2;
                arr[i] = Number(arr[i].slice(0, -1));
            }
        }
    }

    return arr.reduce((a, b) => a + b);
}
```

다른 사람들은 for로 돌면서 값을... 계산하더라...?
 
[참고포스트](https://velog.io/@dongoc21hj/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8B%A4%ED%8A%B8-%EA%B2%8C%EC%9E%84-Javascript)

[참고포스트](https://haerang94.tistory.com/309)

`answer[answer.length-1]`부분을 전부 `last`로 바꾸면 안된다 이게 도대체 뭔지 잘 몰겠다;;
```js
const last = answer[answer.length-1];
        
if(dart[i]==='D'){
    answer[answer.length-1] = last ** 2;
}else if(dart[i]==='T'){
    answer[answer.length-1] = last ** 3;
}
if(dart[i]==='*'){
    answer[answer.length-1] *= 2;
    if(answer.length>=2){
        answer[answer.length-2] *= 2;
    }
}
if(dart[i]==='#'){
    answer[answer.length-1] *= -1;
}

```

이걸로 통과..  `answer[answer.length - 1]`를 변수로 두고싶은데 잘 안된다
```js
function solution(str) {
    let answer = [];
    str = str.replace(/10/g, 'A')
    
    for(let i = 0; i < str.length; i++){
        if(str[i].match(/[0-9]/) !== null) answer.push(Number(str[i]));
        if(str[i].match(/A/) !== null) answer.push(10);

        if(str[i] === 'D') answer[answer.length - 1] = answer[answer.length - 1] ** 2
        if(str[i] === 'T') answer[answer.length - 1] = answer[answer.length - 1] ** 3

        if(str[i] === '*') {
            answer[answer.length - 1] = (answer[answer.length - 1]) * 2
            if(answer[answer.length - 2] !== undefined){
                answer[answer.length - 2] = (answer[answer.length - 2]) * 2
            }
        }

        if(str[i] === '#') {
            answer[answer.length - 1] = (answer[answer.length - 1]) * -1
        }

    }

    return answer.reduce((a, b) => a + b);
}
```