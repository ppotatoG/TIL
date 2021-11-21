function solution(s) {
    for(let i = 0; i < s.length; i ++){
        if(s[i] == "Kim") return "김서방은 "+i+"에 있다";
    }
}
console.log(solution(["Jane", "Kim"]))