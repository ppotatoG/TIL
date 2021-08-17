function solution(num){
    return num.reduce((a, b) => a + b)/num.length;
}

console.log(solution([1,2,3,4]))