function solution(s) {
    let arr = s.split(" ");
    let answer = '';

     arr.forEach((item) => {
         for(let i = 0; i < item.length; i++){
             i % 2 == 0 ? answer += item[i].toUpperCase() : answer += item[i].toLowerCase();
         }
         answer += " ";
     })

     return answer.slice(0, -1);
}
console.log(solution("try hello world"));