function solution(a){
    let arr = [];

    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a.length; j++){
            if(i !== j) arr.push(a[i] + a[j])
        }
    }

    const answer = arr.filter((a, b) => {
        return arr.indexOf(a) === b;
    });

    return answer.sort((a, b) => a - b);
}

console.log(solution([2,1,3,4,1]));
console.log(solution([5,0,2,7]));