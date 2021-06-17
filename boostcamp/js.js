const list = [1, 2, 3, 3, 3, 3, 4, 4]

function solution(arr){ 

    let answer = arr.map( num => num*2) // (8) [2, 4, 6, 6, 6, 6, 8, 8]

    console.log(answer)
}
solution(list)