function solution(s, n){
    let arr = s.split("");
    let answer = []

    arr.forEach((item) => {
        
        if(item.charCodeAt() == 122) {
            answer.push(String.fromCharCode(97 + n - 1))
        }else answer.push(String.fromCharCode(item.charCodeAt() + n))
    })

    return answer.join(" ");
}

console.log(solution("AB", 1));
console.log(solution("a B z", 4));