# 부스트캠프 자가진단 문제풀이

[자가진단 네이버 블로그](https://blog.naver.com/boostcamp_official/221978031932)

1. 자연수가 들어있는 배열 arr
2. 배열 arr 숫자들 중 앞에 있는 숫자들부터 뒤에 중복되어 나타나는 숫자들 중복 횟수 return
3. 중복되는 숫자가 없으면 배열에 -1 을 채워 return

<br>

- 배열 arr의 길이는 1 이상 100 이하의 자연수
- 배열 arr의 원소는 1 이상 100 이하의 자연수

정답

```js
function solution(l){

    const arr = [];
    let answer = [];

    for(let i = 0; i < l.length; i++){
        if(l.indexOf(l[i]) == i) {
            arr.push(l[i]);
            answer.push(0);
        }
    }

    arr.sort((a, b) => a == b ? 0 : a > b ? 1: -1 );

    for(num in l) {
        const idx = arr.indexOf(l[num]);
        answer[idx] += 1;
    }

    answer = answer.filter((a) => a !== 1);

    return answer;
}
```

```
arr = [1, 2, 3, 3, 3, 3, 3, 4, 2, 3, 5, 3, 4, 4, 4, 5, 6]
function solution(){

    let arr1 = arr.filter(function(n){
        return n == 3
    })

    console.log(arr1) 
    // (7) [3, 3, 3, 3, 3, 3, 3]

}
solution()
```
<br>

윤군스 도움
1. 배열을 순회하면서
2. Obj 객체에
3. 값이 undefined 면 1 대입
4. 값이 존재하면 += 1
```
const obj = {};
const arr = [1, 3, 5, 7, 9];
for ( const num of arr ) {
    obj[num] = 'hello';

    for(let i = 0; i <arr.length ; i++) {
        obj[8]
    }

}
```
<br>

[예전 객체에 대한 포스팅 참고](https://blog.naver.com/thgus2270/222286112950)

```
for ( const num of arr ) {
    // 6번 반복하는 반복분 (arr.length = 6)

    let one = 1
    
    if(obj[num] == undefined ){
        obj[num] = num;
    } else {
        obj[num] += 1
        // obj[num] = num = num + 1 
    }

    obj[num] = num;

    console.log(obj)

}
```
<br>

출력....?
```
const obj = {};
const arr = [1, 3, 1, 3, 1, 3, 2, 2, 2, 2, 2, 1, 3, 4, 2, 6, 3, 4, 5, 6, 1];
for ( const num of arr ) {
    // 6번 반복하는 반복분 (arr.length = 6)
    
    if(obj[num] == undefined ){
        obj[num] = 1;
    } else {
        obj[num] += 1
    }

    console.log('1'+':'+ obj['1'])
    console.log('2'+':'+ obj['2'])

    console.log(obj)

}

```
<br>

출력!
- 중복문 바깥으로 빼면서 속도 개선하기
```
const obj = {};
const arr = [2, 5, 4, 6, 5, 8, 8, 9, 0, 9, 0, 3, 0, 6, 7, 3, 6, 8, 0, 6, 8, 9, 2, 5, 7, 9, 5];
for ( const num of arr ) { // 6번 반복하는 반복분 (arr.length = 6)
    
    if(obj[num] == undefined ){
        obj[num] = 1;
    } else {
        obj[num] += 1
    }
}
for(let i = 0; i < 10; i ++){ // 마지막에 한번만 해도 되기 때문에 바깥으로 뺀 중복문
    if (obj[i] == undefined) obj[i] = -1
}
console.log(obj)
// {0: 4, 1: -1, 2: 2, 3: 2, 4: 1, 5: 4, 6: 4, 7: 2, 8: 4, 9: 4}
```
<br>

윤군의 추천 공부내용
- [삼항연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)


empty?
```
let testArr = Math.floor(Math.random()*100)

let n = 0
let list = []

while(n < 99){
    n++

    let testArr = Math.floor(Math.random()*100)

    list[n] =testArr

    console.log(list)
    //list[0] = empty ....

}
```

```
let list = [testArr]

```
list[0] 의 값을 선언해주면 empty로 뜨지 않는다

<br>

완성
(완성 아님)

```js
const obj = {};
const testArr = Math.floor(Math.random()*100)
const list = [testArr]
let n = 0

while( n < 100){ // 랜덤 난수 배열
    n++
    const testArr = Math.floor(Math.random()*100)
    list[n] = testArr
}

function solution(l){ // function solution()
    for ( const num of l ) {    
        if(obj[num] == undefined ){
            obj[num] = 1;
        } else {
            obj[num] += 1
        }
    }
    for(let i = 0; i < 100; i ++){
        if (obj[i] == undefined) obj[i] = -1
    }

    console.log(obj)
}

solution(list)
```

객체가 아닌 배열로 return

중복되는 숫자가 없으면 arr = [-1] 

[공부하다 찾은 글](https://hianna.tistory.com/459)


[천천히 읽을 글](https://aljjabaegi.tistory.com/311)


```js
function solution(l){

    const arr = []; // 요소만 수정 -> const
    let answer = []; // 재할당 -> let

    for(let i = 0; i < l.length; i++){ 
        // list 중복제거한 arr 배열 만들기, 
        //중복 제거 배열 arr.length와 같은 length의 answer 0 추가
        if(l.indexOf(l[i]) == i) {
            arr.push(l[i]);
            answer.push(0);
        }
    }

    arr.sort((a, b) => a == b ? 0 : a > b ? 1: -1 );
    // 삼항연산자, arr 정렬

    for(num in l) {
        const idx = arr.indexOf(l[num]);
        // 중복제거 index값과 answer의 index값 동일하게 변수 추가

        answer[idx] += 1;
        // 1 == 1 => += 1,  2 == 2 => += 1, ...
    }

    answer = answer.filter((a) => a !== 1);
    // 배열 내에 값이 1인 요소 삭제(중복 값 하나는 삭제)

    if(answer.length == 0) answer = -1
    // 배열 내 중복요소가 없을 시 -1 return

    console.log(answer);
}
```