let arr = []
let list01 = [1, 2, 2, 3, 3, 3, 3, 4, 4]
let list02 = [3, 2, 4, 4, 2, 5, 2, 5, 5, 6, 6, 6, 7, 7, 7, 8,8,8]
let list03 = [3, 5, 7, 9]

let answer = []

function solution(l){

    for(let i = 0; i < l.length; i++){ // list 중 중복제거한 배열 만들기
        if(l.indexOf(l[i]) == i) {
            arr.push(l[i])
            answer.push(0)
        }
    }

    for(num in l) {
        const idx = arr.indexOf(l[num])
        answer[idx] += 1
    }

    for(let i = 0; i < answer.length; i++){
        if(answer[i] == 1) answer.splice(i, 1), i--
    }

    console.log(answer)
}

solution(list01) 
/*
solution(list02)
solution(list03)
*/