# 코딩테스트 연습 두 정수 사이의 합

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12912)

## 제한사항
- a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
- a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
- a와 b의 대소관계는 정해져있지 않습니다.

### 제출한 정답
```
function sum(a, b) {
    let answer = 0
    
    if (a == b) answer = a
    else {
        if(a > b) for(let i = b ; i <= a; i ++) answer += i 
        for(let i = a ; i <= b; i ++) answer += i
    }
    
    return answer;
}
```

1. a, b를 받아서 배열로 추가
2. 순서대로 정렬
3. 큰값에서 작은값을 뺀 값 for문으로 받아오기 
4. ???

```
let a = 5
let b = 3

let arr = []

arr.push(a, b)

let sortArr = arr.sort(function(a, b){
    if(a < b) return -1
    else if(a = b) return 0
    else return 1
})

console.log(sortArr)

for(let i = sortArr[0] ; i < sortArr[1]; i ++){
    let sum = sortArr.reduce((a, b) => (a + b))
    sum += i
}
console.log(sum)
```
<br>

답은 맞지만 체점은 안된다
```
function solution(a, b){

    let answer = 0
    let sortArr = []
    sortArr.push(a, b)

    if(a > b){
        sortArr.sort(function(a, b){
            if(a < b) return -1
            else if(a = b) return 0
            else return 1
        })
        for(let i = sortArr[0] ; i < sortArr[1]; i ++){
            answer = sortArr.reduce((a, b) => (a + b))
            answer += i
        }
    }
    else if(a < b){
        for(let i = sortArr[0] ; i < sortArr[1]; i ++){
            answer = sortArr.reduce((a, b) => (a + b))
            answer += i
        }
    }
    else if (a == b) answer = a

    return answer;

}
solution(3, 3)
```
<br>

뭔가 줄여보려고 시도를 했다

하지만 js는 그렇게 쉬운아이가 아니다
```
function solution(a, b){

    let answer = 0
    let Arr = []
    Arr.push(a, b)

    if (a == b) answer = a
    else {
        for(let i = Arr[0] ; i < Arr[1]; i ++){ // a > b 이면 i = 0
            answer = Math.abs(Arr.reduce((a, b) => (a + b))) 
            answer += i
        }
    }
    // return answer;
    console.log(answer)

}
solution(3, 5)
solution(5, 3)

```
<br>

문제 상관 없이 모든 수를 더하는 함수
```
function sum(a, b) {
    let answer = 0
    let Arr = []

    for(let i = a ; i <= b; i ++){
        Arr.push(i)
        answer = Arr.reduce((a, b) => (a + b))
    }
    console.log(answer)
}
sum(1, 10)
```
<br>

- Q. 왜 자꾸 배열을 쓰냐?
- A. 배열 없이 어떻게 모든 수를 구하지?

<br>
num01, num02 가 들어간 이유는 a, b의 값을 바꾸려고...

내가 쓰면서도 이게 최선인가 싶었다....(쭈글쭈글)
```
function sum(a, b) {
    let answer = 0

    let num01 = a
    let num02 = b

    if (num01 == num02) answer = num01
    else {
        if(num01 > num02) {
            num01 = b
            num02 = a
        }
        for(let i = num01 ; i <= num02; i ++){
            answer += i
        }
    }
    
    // return answer;
    console.log(answer)
}
sum(1, 10) // 55
sum(10, 1) // 55
sum(3, 3) // 3
```
<br>

윤군님이 힌트를 주다 못해 답을 알려주셨다

여태 했던것 중에 가장 간단스..
```
function sum(a, b) {
    let answer = 0
    
    function sum(a, b){
        for(let i = a ; i <= b; i ++) answer += i
    }
    if(a == b) answer = a
    else if ( a > b) sum(b, a)
    else sum(a, b)
    
    console.log(answer)
}
sum(1, 10)
sum(10, 1)
sum(3, 3)
```