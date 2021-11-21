function solution(s) {
    var answer = s.split("");
    answer = answer.sort().reverse().join("");
    
    console.log(answer)
    // return answer;
}

let string = "fgZbcde";

solution(string)