function solution(s) {
    // console.log(isNaN(s.toString()));

    if(0 < s.length < 9) {
        if(isNaN(s.toString())) console.log(s, s.length, false); 
        else if(s.length == 4 || s.length ==  6) console.log(s, s.length, true);
    }    
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
