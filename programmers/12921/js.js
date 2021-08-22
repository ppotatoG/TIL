function solution(num) {
    let arr = [];

    for(let i = 2; i < num; i ++){
        if(i % 2 !== 0) arr.push(i);
    }

    return arr;
}
console.log(solution(10));