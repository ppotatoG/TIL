function solution(num) {
    let min = [...num].sort()[0];

    if(num[0] == num[1]) num = [-1];

    for(let i = 0; i < num.length; i++){
        if(num[i] == min) num.splice(i, 1)
    }

    if(num.length == 0) num.push(-1);
    return num;   
}

console.log(solution([3,7,1,5, 1, 7, 1]));
console.log(solution([10, 10, 10, 10]));