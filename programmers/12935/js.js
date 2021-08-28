function solution(num) {
    let min = [...num].sort()[0];

    console.log(Math.min(num))
    for(let i = 0; i < num.length; i++){
        if(num[i] == min) num.splice(i, 1)
    }

    if(num.length == 0) num = [-1];

    return num;
}

console.log(solution( [3,7,1,5]));
console.log(solution([10]));