let answer = []
let list = [1, 2, 3, 3, 3, 3, 4, 4]
let newArr = []

function solution(l){

    for(let i = 0; i < l.length; i++){
        if(l.indexOf(l[i]) == i) answer.push(l[i])
    }

    console.log(answer)

    for(num in l) {
        console.log(answer[num])
        if(answer[0] == list[num] || answer[1] == list[num] || answer[2] == list[num] || answer[3] == list[num]) {
            console.log('sfdnj'+list[num])
        }

        // if(answer[0] == list[num]) newArr[0] += 1
        // else if(answer[1] == list[num]) newArr[1] += 1
        // else if(answer[2] == list[num]) newArr[2] += 1
        // else if(answer[3] == list[num]) newArr[3] += 1
    }
}

solution(list)
