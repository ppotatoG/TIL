let arr = []
let list = [1, 2, 3, 3, 3, 3, 4, 4]
let answer = [0, 0, 0, 0]

function solution(l){

    for(let i = 0; i < l.length; i++){
        if(l.indexOf(l[i]) == i) arr.push(l[i])
    }

    for(num in l) {
        if(arr[0] == l[num]) {
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
    console.log(answer)

}

solution(list)
