function solution(s) {
    var answer = '';

    answer = s.length%2 == 0 ? s.charAt(s.length/2 - 1) + s.charAt(s.length/2) : s.charAt(s.length/2)

    // console.log(answer)
    return answer
}

let s1 = "abcde"
let s2 = 'qwer'

solution(s1)
solution(s2)
