function solution(s, n){
    let arr = s.split("");
    let answer = []

    arr.forEach((item) => {
        if(item.charCodeAt() == 122) answer.push(String.fromCharCode(97 + n - 1))
        else if(item.charCodeAt() == 32) return false;
        else answer.push(String.fromCharCode(item.charCodeAt() + n))
    })

    return s.indexOf(" ") > -1 ? answer.join(" ") :  answer.join("")
}

console.log(solution("AB", 1));
console.log(solution("a B z", 4));