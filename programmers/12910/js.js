function solution(arr, divisor) {
    var answer = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0) {
            answer.push(arr[i])
            answer.sort((a, b) => a - b)
        }
    }

    if(answer.length == 0) answer.push(-1)

    console.log(answer)
}

let s1 = [5, 9, 7, 10]
let s2 = [2, 36, 1, 3]
let s3 = [3,2,6]

solution(s1, 5)
solution(s2, 1)
solution(s3, 10)