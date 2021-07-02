function solution(s) {
    const arr = s.split("");
    const answer =  arr.sort().reverse().join("");
    
    console.log(answer);
}

let string = "fgZbcde";

solution(string)