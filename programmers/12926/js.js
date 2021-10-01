function solution(s, n){
    const arr = s.split("").filter((value) => value !== ' ');
    let answer = []

    while(n > 26) n -=26;

    let index;

    arr.forEach((item) => {
        if(item === item.toUpperCase()) { // 대문자
            index = item.charCodeAt() + n;
            index > 90 ? answer.push(String.fromCharCode(index - 26)) :  answer.push(String.fromCharCode(index));
        } else if(item === item.toLowerCase()) { // 소문자 
            index = item.charCodeAt() + n;
            index > 122 ? answer.push(String.fromCharCode(index - 26)) :  answer.push(String.fromCharCode(index));
        }

    })

    return s.indexOf(" ") > -1 ? answer.join(" ") :  answer.join("");
}

console.log(solution('yz', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 316));
console.log(solution('A a Z z', 25));