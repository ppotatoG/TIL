function solution(s) {
    var answer = '';

    let half = []
    
    if(s.length%2 == 0) {
        half.push(s.length/2 - 1, s.length/2)
        answer = s.charAt(half[0]) + s.charAt(half[1])
    } else half.push(s.length/2), answer = s.charAt(half)

    console.log(answer)
    // return answer;
}

let s1 = "abcde"
let s2 = 'qwer'

solution(s1)
solution(s2)
