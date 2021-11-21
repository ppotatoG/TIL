function solution(a) { 
    let answer = [];

    for(let i = 0; i < a.length + 1; i++){
        if(a[i] !== a[i + 1]) {
            answer.push(a[i])
        }
    }
    
    return answer;
}

console.log(solution([1,1,3,3,0,1,1]));
console.log(solution([4,4,4,3,3]));
