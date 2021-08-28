function solution(num) {
    let min = num;

    console.log(min, num);

    min.sort()[0];

    console.log(min, num);

    for(let i = 0; i < num.length; i++){
        if(num[i] == min) num.splice(i, 1)
    }

    if(num.length == 1) num = [-1];

    // return num;
}

console.log(solution([4,3,2,1]));
console.log(solution([10]));