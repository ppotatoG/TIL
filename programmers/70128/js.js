function solution(a, b) {
    let answer = 0 ;

    for(let i = 0; i < a.length; i ++) answer += a[i] * b[i] ;

    // return answer;
    console.log(answer);
}

let a = [1,2,3,4]
let b = [-3,-1,0,2]

solution(a, b)


let a1 = [-1,0,1]
let b1 = [1,0,-1]

solution(a1, b1)