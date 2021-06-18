let arr = []
let list01 = [1, 2, 3, 3, 3, 3, 4, 4]
let list02 = [3, 2, 4, 4, 2, 5, 2, 5, 5]
let list03 = [3, 5, 7, 9]

let answer = [0, 0, 0, 0]

function solution(l){

    for(let i = 0; i < l.length; i++){ // list 중 중복제거한 배열 만들기
        if(l.indexOf(l[i]) == i) arr.push(l[i])
    }

    for(num in l) { 
        if(arr[0] == l[num]) { // 중복 제거 == list 중 같은 값 찾아 += 1
            answer[0] += 1
        }
        else if(arr[1] == l[num]) {
            answer[1] += 1
        }
        else if(arr[2] == l[num]) {
            answer[2] += 1
        }
        else if(arr[3] == l[num]) {
            answer[3] += 1
        }
    }
    
    for(let i = 0; i < answer.length; i ++) { // answer 내 값이 1일 때 삭제
        if(answer[i] == 1) answer.splice(i, 1), i--
    }

    if(answer.length == 0) answer.push(-1) // answer 값이 없으면 -1 

    console.log(answer)

    arr = [] // 값 초기화
    answer = [0, 0, 0, 0] // 값 초기화
}

solution(list01)
solution(list02)
solution(list03)
