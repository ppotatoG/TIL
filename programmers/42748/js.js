function solution(a, c) {
    var answer = []

    for( let i = 0 ; i < c.length; i ++){
        a = a.slice(c[i][0] - 1, c[i][1])
        a.sort()

        answer.push([c[i][2] - 1])
        
        console.log(a)

        
        // console.log(a.slice(c[0][0] - 1, c[0][1]).sort()[c[0][2] - 1])
        // answer[i] = a.slice(c[i][0] - 1, c[i][1]).sort()[c[i][2] - 1]
    }

    console.log(answer)
    // return answer
}
let array = [1, 5, 2, 6, 3, 7, 4]
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

solution(array, commands)