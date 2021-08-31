function solution(a, s) {
    for(let i = 0; i < a.length; i++){
        if(s[i] === false) a[i] *= -1; 
    }

    return a.reduce((a, b) => a + b);
}
console.log(solution([4,7,12], [true,false,true]));
console.log(solution([1,2,3], [false,false,true]));