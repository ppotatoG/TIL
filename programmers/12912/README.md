# 코딩테스트 연습 두 정수 사이의 합

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12912)

## 제한사항
- a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
- a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
- a와 b의 대소관계는 정해져있지 않습니다.


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
function solution(a, b){

    let answer = 0
    let Arr = []
    // Arr.push(a, b)

    for(let i = a ; i <= b; i ++){
        Arr.push(i)
        console.log(Arr)
        answer = Math.abs(Arr.reduce((a, b) => (a + b))) 
    }
    // return answer;
    console.log(answer)

}
solution(1, 10)
```