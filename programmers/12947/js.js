function solution(num){
    let arr = [];    
    arr = num.toString().split("");

    return num % arr.reduce((a, b) => Number(a) + Number(b)) == 0;
}

console.log(solution(11));