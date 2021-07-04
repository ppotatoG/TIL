function solution(s) {
    let result = s.replace(/[^0-9]/g, "");
    if(s.length === result.length && (s.length == 4 || s.length ==  6)) return true;
    else return false;

    return s.length === result.length && (s.length == 4 || s.length ==  6) ? true : false 
}

let s1 = "a234";
let s2 = "1234";
solution(s1)
solution(s2)

let s3 = "123456";
let s4 = "dsae";
solution(s3)
solution(s4)

let s5 = "222";
let s6 = "1e22";
solution(s5)
solution(s6)
