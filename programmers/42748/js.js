function solution(a, c) {
    var answer = []

    for(let i = 0; i < 3; i++){
        answer = a.slice(c[i][0] - 1, c[i][1])
    
        answer.sort(function(a, b){
            if(a > b) return 1
            else if(a === b) return 0
            else return -1
        })
        console.log(answer[c[i][2] - 1])  // 5, 6, 3
        // return answer[c[i][2] - 1]
    }
}


let array = [1, 5, 2, 6, 3, 7, 4]
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

solution(array, commands)