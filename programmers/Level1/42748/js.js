function solution(a, c) {
    let answer = []
    for(let i = 0; i < c.length; i++){

        let b = a.slice(c[i][0] - 1, c[i][1]).sort(function(a, b){
            if(a > b) return 1
            else if(a === b) return 0
            else return -1
        })
    
        answer.push(b[c[i][2] - 1])
    }
    // console.log(answer) 
    return answer
}

let array = [1, 5, 2, 6, 3, 7, 4]
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

solution(array, commands)
