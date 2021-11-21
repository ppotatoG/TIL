function solution(a, b) {
    console.log(a.reduce((acc, cur, index) => acc + cur * b[index], 0));
    // return a.reduce((total, value, index) => total + value * b[index], 0);
}

let a = [1,2,3,4]
let b = [-3,-1,0,2]

solution(a, b)

let a1 = [-1,0,1]
let b1 = [1,0,-1]

solution(a1, b1)